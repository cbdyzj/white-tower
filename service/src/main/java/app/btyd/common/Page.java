package app.btyd.common;

import java.util.List;

public class Page<T> {

    private List<T> list;
    private Integer total;

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public static <U> Page<U> of(List<U> list, Integer total) {
        var page = new Page<U>();
        page.setList(list);
        page.setTotal(total);
        return page;
    }
}
