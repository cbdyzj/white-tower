package app.btyd.repository;

import app.btyd.entity.User;
import app.btyd.model.LimitQuery;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;

import static app.btyd.util.EntityUtils.slim;

@Repository
public class UserRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public UserRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public @Nullable User selectUser(Integer id) {
        var sql = """
                SELECT id, username, email, avatar_url, last_active_time, creation_time
                FROM t_user
                WHERE id = :id;
                """;
        var paramMap = Map.of("id", id);
        var rowMapper = new DataClassRowMapper<>(User.class);
        var userList = this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
        return CollectionUtils.firstElement(userList);
    }

    public @NotNull List<User> selectUserList(LimitQuery lq) {
        var sql = """
                SELECT id, username, email, avatar_url, last_active_time, creation_time
                FROM t_user
                LIMIT :limit OFFSET :offset;
                """;
        var paramMap = Map.of("limit", lq.limit(), "offset", lq.offset());
        var rowMapper = new DataClassRowMapper<>(User.class);
        return this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
    }

    public Integer selectUserCount() {
        var sql = """
                SELECT COUNT(*)
                FROM t_user;
                """;
        var rowMapper = new SingleColumnRowMapper<>(Integer.class);
        var count = this.jdbcTemplate.query(slim(sql), rowMapper);
        return CollectionUtils.firstElement(count);
    }
}
