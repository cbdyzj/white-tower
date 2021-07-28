CREATE TABLE IF NOT EXISTS t_notification
(
    id              SERIAL PRIMARY KEY,
    type            VARCHAR,
    user_id         INTEGER,
    topic_id        INTEGER,
    trigger_user_id INTEGER,
    unread          BOOLEAN     DEFAULT TRUE,
    trigger_time    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX user_id_index ON t_notification (user_id);