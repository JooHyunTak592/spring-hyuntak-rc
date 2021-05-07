package com.seoul.oda.dto;

public class Message {

    private StatusEnum status;
    private String message;
    private Object data;

    public Message() {
        this.status = StatusEnum.BAD_REQUEST;
        this.data = null;
        this.message = null;
    }
    
    
	public static Message success(Object data) {
		return new Message(data);
	}
	
	public static Message fail(String message) {
		return new Message(message);
	}
	
	private Message(Object data) {
		this.status = StatusEnum.OK;
		this.data = data;
	}
	
	private Message(String message) {
		this.status = StatusEnum.NOT_FOUND;
		this.message = message;
	}
	

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Message [status=" + status + ", message=" + message + ", data=" + data + "]";
	}
    

    
}

