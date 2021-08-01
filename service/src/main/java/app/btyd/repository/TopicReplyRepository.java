package app.btyd.repository;

import app.btyd.entity.TopicReply;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

import static app.btyd.util.EntityUtils.slim;

@Repository
public class TopicReplyRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public TopicReplyRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<TopicReply> selectTopicReplyList(Integer topicId) {
        var sql = """
                SELECT id, topic_id, reply_user_id, reply_content, reply_time
                FROM t_topic_reply
                WHERE topic_id = :topicId;
                """;
        var paramMap = Map.of("topicId", topicId);
        var rowMapper = new DataClassRowMapper<>(TopicReply.class);
        return this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
    }
}
