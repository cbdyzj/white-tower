-- wt_user
DROP TABLE IF EXISTS wt_user;
CREATE TABLE IF NOT EXISTS wt_user
(
    id               SERIAL PRIMARY KEY,
    username         VARCHAR,
    email            VARCHAR,
    last_active_time TIMESTAMPTZ DEFAULT NOW(),
    creation_time    TIMESTAMPTZ DEFAULT NOW()
);
