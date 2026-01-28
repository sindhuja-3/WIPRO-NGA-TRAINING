public class StringExample {
    public static void main(StringExample[] args) {

        String s = "Here is my first java program";
        int count = 0;

        s = s.toLowerCase(); 

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' || 
                ch == 'o' || ch == 'u') {
                count++;
            }
        }

        System.out.println("Number of vowels: " + count);
        count = s.length();

        System.out.println("Total characters (including spaces): " + count);
    }
}

// to count number of characters including spaces 

    

