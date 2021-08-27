package app.btyd.repository;

import app.btyd.entity.NotificationEntity;
import app.btyd.common.LimitOffset;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Map;

import static app.btyd.util.EntityUtils.slim;

@Repository
public class NotificationRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public NotificationRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<NotificationEntity> selectNotificationList(Integer userId, LimitOffset limitOffset) {
        var sql = """
                SELECT id, type, user_id, topic_id, trigger_user_id, unread, trigger_time
                FROM t_notification
                WHERE user_id = :userId
                LIMIT :limit OFFSET :offset;
                """;
        var paramMap = Map.of(
                "userId", userId,
                "limit", limitOffset.limit(),
                "offset", limitOffset.offset()
        );
        var rowMapper = new DataClassRowMapper<>(NotificationEntity.class);
        return this.jdbcTemplate.query(slim(sql), paramMap, rowMapper);
    }

    public Integer selectUnreadNotificationCount() {
        var sql = """
                SELECT COUNT(*)
                FROM t_notification
                WHERE unread = TRUE;
                """;
        var rowMapper = new SingleColumnRowMapper<>(Integer.class);
        var count = this.jdbcTemplate.query(slim(sql), rowMapper);
        Assert.notEmpty(count, "Illegal count select result");
        return count.get(0);
    }
}
