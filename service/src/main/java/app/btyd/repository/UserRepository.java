package app.btyd.repository;

import app.btyd.entity.User;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public UserRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> selectUserList(int limit, int offset) {
        var sql = """
                SELECT id, username, email, last_active_time, creation_time
                FROM wt_user
                LIMIT :limit OFFSET :offset
                """;
        var paramMap = Map.of("limit", limit, "offset", offset);
        var rowMapper = BeanPropertyRowMapper.newInstance(User.class);
        return this.jdbcTemplate.query(sql, paramMap, rowMapper);
    }

    public Integer selectUserCount() {
        var sql = """
                SELECT COUNT(*)
                FROM wt_user
                """;
        var rowMapper = SingleColumnRowMapper.newInstance(Integer.class);
        var count = this.jdbcTemplate.query(sql, rowMapper);
        Assert.notEmpty(count, "Illegal count select result");
        return count.get(0);
    }
}
