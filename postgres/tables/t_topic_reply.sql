CREATE TABLE IF NOT EXISTS t_topic_reply
(
    id            SERIAL PRIMARY KEY,
    topic_id      INTEGER,
    reply_user_id INTEGER,
    reply_content VARCHAR,
    reply_time    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX topic_id_index ON t_topic_reply (topic_id);