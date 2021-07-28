package app.btyd.repository;

import app.btyd.entity.Topic;
import app.btyd.model.LimitQuery;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;

import static app.btyd.util.EntityUtils.slim;

@Repository
public class TopicRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public TopicRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Topic> selectTopicList(LimitQuery lq) {
        var sql = """
                SELECT id, node_id, post_user_id, title, content, post_time, updated_time
                FROM t_topic
                LIMIT :limit OFFSET :offset;
                """;
        var paramMap = Map.of("limit", lq.limit(), "offset", lq.offset());
        var rowMapper = DataClassRowMapper.newInstance(Topic.class);
        return this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
    }

    public Integer selectTopicCount() {
        var sql = """
                SELECT COUNT(*)
                FROM t_topic;
                """;
        var rowMapper = SingleColumnRowMapper.newInstance(Integer.class);
        var count = this.jdbcTemplate.query(slim(sql), rowMapper);
        Assert.notEmpty(count, "Illegal count select result");
        return count.get(0);
    }
}
