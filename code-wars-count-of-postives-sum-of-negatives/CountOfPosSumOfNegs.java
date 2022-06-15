import java.util.Arrays;

public class CountOfPosSumOfNegs {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15};
        System.out.println(Arrays.toString(countPositivesSumNegatives(arr)));

    }

    public static int[] countPositivesSumNegatives(int[] input) {

        int[] arr = new int[2];

        if (input == null || input.length == 0) {
            return new int[0];
        }


        for (int x : input) {
            if (x > 0) {
                arr[0]++;
            } else {
                arr[1] += x;
            }
        }
        return arr;
    }

        //Another solution
//    public static int[] countPositivesSumNegatives(int[] input)
//    {
//
//        if (input == null || input.length == 0) {
//            return new int[0];
//        }
//
//        int sum = 0;
//        int count = 0;
//
//        for ( int x : input ){
//            if ( x > 0) {
//                count++;
//            } else {
//                sum += x;
//            }
//        }
//        return new int[] {count, sum};
//
//    }


}
