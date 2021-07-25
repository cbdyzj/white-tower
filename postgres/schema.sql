-- t_user
DROP TABLE IF EXISTS t_user;
CREATE TABLE IF NOT EXISTS t_user
(
    id               SERIAL PRIMARY KEY,
    username         VARCHAR,
    email            VARCHAR,
    avatar_url       VARCHAR,
    last_active_time TIMESTAMPTZ DEFAULT NOW(),
    creation_time    TIMESTAMPTZ DEFAULT NOW()
);

-- t_topic
DROP TABLE IF EXISTS t_topic;
CREATE TABLE IF NOT EXISTS t_topic
(
    id          SERIAL PRIMARY KEY,
    node_id      INTEGER,
    post_user_id  INTEGER,
    title       VARCHAR,
    content     VARCHAR,
    post_time    TIMESTAMPTZ DEFAULT NOW(),
    updated_time TIMESTAMPTZ DEFAULT NOW()
);
