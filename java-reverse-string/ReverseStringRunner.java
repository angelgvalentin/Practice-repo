import java.util.ArrayList;
import java.util.List;

public class ReverseStringRunner {

    public static void main(String[] args) {


        String str = "Hello World";
//        System.out.println(reversedWithStringBuilder(str));
        System.out.println(reversedManually((str)));


    }

//    // Method using StringBuilder API
//    private static String reversedWithStringBuilder (String str){
//        return new StringBuilder(str)
//                .reverse()
//                .toString();
//    }


    // Reversing string manually without api
        private static String reversedManually(String str) {
            StringBuilder sb = new StringBuilder();
            for (int i = str.length() - 1; i >= 0; i--) {
                sb.append(str.charAt(i));
            }
            return "str Reversed Manually is " + sb.toString();

        }


}
