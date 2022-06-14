import java.util.ArrayList;
import java.util.List;

public class ReverseStringRunner {

    public static void main(String[] args) {


        String str = "Hello World";
//        System.out.println(reversedWithStringBuilder(str));
//        System.out.println(reversedManually((str)));

        System.out.println(reverseStringManuallyWithoutStringBuilder((str)));


    }

        //Using the StringBuilder() API we don't have to create new instances of the string for each change we make to the string since String is immutable. We create a StringBuilder and that is mutable, so we can make all changes there and then make that a string and return it when done.

//    // Method using StringBuilder API
//    private static String reversedWithStringBuilder (String str){
//        return new StringBuilder(str)
//                .reverse()
//                .toString();
//    }



    //In this method we didn't use the reverse API. We did the reverse logic with a for loop, but we still used the StringBuilder so that we don't have to make new instances of the string and keep efficiency.
    // Reversing string manually without api
//        private static String reversedManually(String str) {
//            StringBuilder sb = new StringBuilder();
//            for (int i = str.length() - 1; i >= 0; i--) {
//                sb.append(str.charAt(i));
//            }
//            return "str Reversed Manually is " + sb.toString();
//
//        }



    // In this next method we do it completely without using StringBuilder API. The issue with this is that it is the least efficient method since we make new instances for each iteration of the for loop.
    private static String reverseStringManuallyWithoutStringBuilder(String str) {
        String newStr = "";

        for (int i = str.length() - 1 ; i >= 0 ; i--) {
            newStr = newStr + str.charAt(i);
        }
        return "Reversed  manually without StringBuilder - " + newStr;
    }


}
