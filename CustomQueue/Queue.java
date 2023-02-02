package CustomQueue;

import java.util.Arrays;

public class Queue {
    private int[] arr;      // массив для хранения элементов queue
    private int front;      // front указывает на передний элемент в queue
    private int rear;       // rear часть указывает на последний элемент в queue
    private int capacity;   // максимальная емкость queue
    private int count;      // текущий размер queue

    public Queue() {


    }

    public Queue(int size) {
        arr = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        count = 0;
       

    }
        public void pushToEnd ( int data){
            if (rear == capacity - 1)
                rear = -1;
            arr[++rear] = data;
            count++;
        }


        public int remove () {
            int temp = arr[front++];
            if (front == capacity) front = 0;
            count--;
            return temp;
        }

        public int peek () {
            return arr[front];
        }

        public boolean isEmpty () {
            return (count == 0);
        }


        public int size () {
            return count;
        }


}

