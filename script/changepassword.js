

function change() {
    return` <div id="rediv">

    <p id="pr">Reset Password</p>
    <form id="formchapassw">
      <input required type="password" id="re" class="oldp" placeholder="Password"
        onfocus="this.placeholder = 'Enter existing password' ">
      <br>
      <br>
      <input required type="password" id="re" class="newp" placeholder="New Password"
        onfocus="this.placeholder = 'Enter Your New Password' "><br><br>
      <input required type="password" id="re" class="newp2" placeholder="Re-type New Password"><br><br>
      <div id="ds">
        <input type="submit" id="subbox" value="UPDATE">

        <button id="close-btn" type="button" class="b-cancel">Cancel</button>
    </form>
  </div>`
}
export default change;