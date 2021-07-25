package app.btyd.entity;

import java.sql.Timestamp;

public class Notification {

    public static final String TYPE_REPLY = "REPLY";
    public static final String TYPE_FAVORITE = "FAVORITE";

    private Integer id;
    private Integer userId;
    private String type;
    private Integer topicId;
    private Integer triggerUserId;
    private Boolean unread;
    private Timestamp triggerTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }

    public Integer getTriggerUserId() {
        return triggerUserId;
    }

    public void setTriggerUserId(Integer triggerUserId) {
        this.triggerUserId = triggerUserId;
    }

    public Boolean getUnread() {
        return unread;
    }

    public void setUnread(Boolean unread) {
        this.unread = unread;
    }

    public Timestamp getTriggerTime() {
        return triggerTime;
    }

    public void setTriggerTime(Timestamp triggerTime) {
        this.triggerTime = triggerTime;
    }
}
