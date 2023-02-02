package CustomQueue;

public class QueueTester {
    public static void main(String[] args) {
        Queue queue = new Queue(5);
        queue.pushToEnd(1);
        queue.pushToEnd(2);
        queue.pushToEnd(3);
        queue.pushToEnd(4);
        queue.pushToEnd(5);


        System.out.println(queue.peek());
        queue.remove();
        System.out.println(queue.peek());

    }
}
