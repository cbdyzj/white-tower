CREATE TABLE IF NOT EXISTS t_notification
(
    id              SERIAL PRIMARY KEY,
    type            VARCHAR,
    user_id         INTEGER,
    topic_id        INTEGER,
    trigger_user_id INTEGER,
    unread          BOOLEAN     DEFAULT TRUE,
    triggerTime     TIMESTAMPTZ DEFAULT NOW()
);
