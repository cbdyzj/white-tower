package app.btyd.entity;

import java.sql.Timestamp;

public record User(
        Integer id,
        String username,
        String email,
        String avatarUrl,
        Timestamp lastActiveTime,
        Timestamp creationTime
) {
}
