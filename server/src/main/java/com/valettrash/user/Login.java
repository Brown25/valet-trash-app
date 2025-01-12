/* *
import java.security.SecureRandom;
import java.security.MessageDige
import java.util.Base64;



public class Login {
    private static UserDatabase userDatabase = new UserDatabase();

    public void createUser(String username, String password, String email) throws Exception {
        UserDatabase userDB = new UserDatabase();
        if (password.length() < 8) {
            throw new Exception("Failed to add user to database. Password is too short. Must be at least 8 characters long.");
        }
        if (!email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")) {
            throw new Exception("Failed to add user to database. Not valid email.");
        }
        if (!userDB.isEmailAvailable(email)) {
            throw new Exception("Failed to add user to database. Email not available.");
        }
        if (!userDB.isUsernameAvailable(username)) {
            throw new Exception("Failed to add user to database. Username not available.");
        }

        String salt = generateNewSalt();
        String hashedPassword = hashPassword(password, salt);
        User user = new User(username, hashedPassword, salt, email);

        boolean success = userDB.addUser(user);
        if (!success) {
            throw new Exception("Failed to add user to database.");
        }
    }

    public String hashPassword(String password, String salt) throws Exception {
        if (password == null || salt == null) {
            throw new IllegalArgumentException("Password and salt cannot be null");
        }
        MessageDigest messDigest = MessageDigest.getInstance("SHA-256");
        messDigest.update(salt.getBytes());
        byte[] byteHashedPass = messDigest.digest(password.getBytes());
        return Base64.getEncoder().encodeToString(byteHashedPass);
    }

    public String generateNewSalt() {
        SecureRandom random = new SecureRandom();
        byte[] byteSalt = new byte[16];
        random.nextBytes(byteSalt);
        return Base64.getEncoder().encodeToString(byteSalt);
    }
   /* 
    public void checkLogin(String username, String password) throws Exception {
        // Retrieve user by username
        User dbUser = userDatabase.retrieveUser(username);
        if (dbUser == null) {
            throw new Exception("User not found");
        }

        // Hash the input password with the user's existing salt
        String hashedInputPassword = hashPassword(password, dbUser.getSalt());

        // Check if the hashed input password matches the stored hashed password
        if (!dbUser.getHashedPassword().equals(hashedInputPassword)) {
            throw new Exception("Invalid password");
        }
    } 
} */