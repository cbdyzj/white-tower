package app.btyd.repository;

import app.btyd.entity.Topic;
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
public class TopicRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public TopicRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public @Nullable Topic selectTopic(Integer id) {
        var sql = """
                SELECT id, node_id, post_user_id, title, content, post_time, updated_time
                FROM t_topic
                WHERE id = :id;
                """;
        var paramMap = Map.of("id", id);
        var rowMapper = new DataClassRowMapper<>(Topic.class);
        var topicList = this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
        return CollectionUtils.firstElement(topicList);
    }

    public @NotNull List<Topic> selectTopicList(LimitQuery lq) {
        var sql = """
                SELECT id, node_id, post_user_id, title, content, post_time, updated_time
                FROM t_topic
                LIMIT :limit OFFSET :offset;
                """;
        var paramMap = Map.of("limit", lq.limit(), "offset", lq.offset());
        var rowMapper = new DataClassRowMapper<>(Topic.class);
        return this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
    }

    public Integer selectTopicCount() {
        var sql = """
                SELECT COUNT(*)
                FROM t_topic;
                """;
        var rowMapper = new SingleColumnRowMapper<>(Integer.class);
        var count = this.jdbcTemplate.query(slim(sql), rowMapper);
        return CollectionUtils.firstElement(count);
    }
}
