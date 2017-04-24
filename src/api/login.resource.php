<?php
#
# Den här klassen ska köras om vi anropat resursen user i vårt API genom /?/user
#
class _login extends Resource{ // Klassen ärver egenskaper från den generella klassen Resource som finns i resource.class.php
    # Här deklareras de variabler/members som objektet ska ha
    public $user_name, $user_id, $request;
    # Här skapas konstruktorn som körs när objektet skapas
    function __construct($resource_id, $request){
        
        # Om vi fått med ett id på resurser (Ex /?/user/15) och det är ett nummer sparar vi det i objektet genom $this->id
        if(is_numeric($resource_id))
        $this->user_id = $resource_id;
        # Vi sparar också det som kommer med i URL:en efter vårt user_id som en array
        $this->request = $request;
    }
    
    function GET($input, $db){
        $this->user_id = $_SESSION['login_user'];
    }
    
    # Denna funktion körs om vi anropat resursen genom HTTP-metoden POST
    function POST($input, $db){
        # I denna funktion skapar vi en ny user med den input vi fått
        /* if(isset($input['user_name'], $input['user_password'])){*/
        $user_name = escape($input->user_name);
        $user_password = escape($input->user_password);
        
        
        /*echo $this->user_name;*/
        
        $query = "SELECT * FROM users
        WHERE user_name = '$user_name'
        AND user_password = '$user_password'";
        
        $result = mysqli_query($db, $query);
        
        if (mysqli_num_rows($result) == 1) {
            $user = mysqli_fetch_assoc($result);
            $_SESSION['login_user'] = $user['user_id']; //sets the key to login_user and the value to $username
            $this->user_name = $user['user_name'];
            $this->user_id = $user['user_id'];
        } else {
            
        }
        
        /*$result =
        $user = mysqli_fetch_assoc($result);
        $this->user_name = $user['user_name'];
        $this->user_password = $user['user_password'];*/
        /* }
        else{
        $this->user_name = null;
        echo 'no resource given';
        }*/
    }
}