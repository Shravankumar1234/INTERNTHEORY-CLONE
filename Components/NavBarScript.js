const NavBar = () => {
  return `<div>
    <div id="MenuButton">
      <i class="fas fa-bars"></i>
    </div>
    <div id="NavBarLogo">
      <img src="https://assets.interntheory.com/creative/logo.png" alt="" />
    </div>
  </div>
  <div>
    <div id="NavBarBell">
    <i class="fas fa-bell"></i>
    </div>
    <div id="NavBarCart">
      <i class="fa-solid fa-cart-shopping"></i>
      <div id="cartno"><p id="num"></p></div>
    </div>
    <div id="NavBarProfile">
    <img src="https://assets.interntheory.com/creative/default-images/girlProfile.jpg">
    </div>
    <div id="NavBarSignIN">
      <button>SIGN IN</button>
    </div>
  </div>`
}
const Menu = () => {
  return `
  <div>
    <div id="MenuButton2">
      <i class="fas fa-bars"></i>
    </div>
    <div id="NavBarLogo2">
      <img src="https://assets.interntheory.com/creative/logo.png" />
    </div>
  </div>
  <div id="MenuProfile">
    <div id="MenuProfileImage">
      <img src="https://assets.interntheory.com/creative/default-images/girlProfile.jpg">
    </div>
    <div>
      <div id="MenuProfileName"></div>
      <div id="MenuProfileNumber"></div>
    </div>
  </div>
  <div>
    <div id="MenuDashboard">
      <div class="MenuBarIcon"><i class="fas fa-box"></i></div>
      <div class="MenuBarList">Dashboard</div>
    </div>
    <div id="MenuProfile2">
      <div class="MenuBarIcon"><i class="fas fa-user-circle"></i></div>
      <div class="MenuBarList">Profile</div>
    </div>
    <div id="MenuHome">
      <div class="MenuBarIcon"><i class="fas fa-home"></i></div>
      <div class="MenuBarList">Home</div>
    </div>
    <div>
      <div class="MenuBarIcon"><i class="fas fa-th-list"></i></div>
      <div class="MenuBarList">Internships</div>
    </div>
    <div>
      <div class="MenuBarIcon"><i class="fas fa-briefcase"></i></div>
      <div class="MenuBarList">Jobs</div>
    </div>
    <div id="MenuPostInternship">
      <div class="MenuBarIcon"><i class="fas fa-indent"></i></div>
      <div class="MenuBarList">Post Internship</div>
    </div>
    <div id="Courses">
      <div class="MenuBarIcon"><i class="fab fa-bitbucket"></i></i></div>
      <div class="MenuBarList">Courses</div>
      <div id="CoursesDownArrow"><i class="fas fa-angle-down"></i></div>
    </div>
    <div id="Courses2">
      <div class="MenuBarIcon"><i class="fab fa-bitbucket"></i></div>
      <div class="MenuBarList">Courses</div>
      <div id="CoursesUpArrow"><i class="fas fa-angle-up"></i></div>
    </div>
    <div id="CoursesHiddenOption">
      <div id="online">Online Courses</div>
      <div id="offline">Classroom Training</div>
    </div>
    <div id="MenuTransactions">
      <div class="MenuBarIcon"><i class="fas fa-dollar-sign"></i></div>
      <div class="MenuBarList">Transactions</div>
    </div>
    <div>
      <div class="MenuBarIcon"><i class="fas fa-phone"></i></div>
      <div class="MenuBarList">Contact Us</div>
    </div>
    <div id="MenuBussiness">
      <div class="MenuBarIcon"><i class="far fa-building"></i></div>
      <div class="MenuBarList">Start Your Bussiness Today</div>
    </div>
  </div>
  <div>
    <div id="MenuPassword">
      <div class="MenuBarIcon"><i class="fas fa-lock"></i></div>
      <div class="MenuBarList">Change Password</div>
    </div>
    <div id="MenuLogout">
      <div class="MenuBarIcon"><i class="fas fa-sign-out-alt"></i></div>
      <div class="MenuBarList">Logout</div>
    </div>
    <div id="Register">
      <div class="MenuBarIcon"><i class="fas fa-align-left"></i></div>
      <div class="MenuBarList">Register</div>
      <div id="RegisterDownArrow"><i class="fas fa-angle-down"></i></div>
    </div>
    <div id="Register2">
      <div class="MenuBarIcon"><i class="fas fa-align-left"></i></div>
      <div class="MenuBarList">Register</div>
      <div id="RegisterUpArrow"><i class="fas fa-angle-up"></i></div>
    </div>
    <div id="RegisterHiddenOption">
      <div>Company</div>
      <div>Student</div>
    </div>
    <div id="Login">
      <div class="MenuBarIcon"><i class="fas fa-door-open"></i></div>
      <div class="MenuBarList">Login</div>
      <div id="LoginDownArrow"><i class="fas fa-angle-down"></i></div>
    </div>
    <div id="Login2">
      <div class="MenuBarIcon"><i class="fas fa-door-open"></i></div>
      <div class="MenuBarList">Login</div>
      <div id="LoginUpArrow"><i class="fas fa-angle-up"></i></div>
    </div>
    <div id="LoginHiddenOption">
      <div onclick="window.location.href='./LoginCompany.html'">Company</div>
      <div onclick="window.location.href='./LoginStudent.html'">Student</div>
    </div>
  </div>`
}
export { NavBar, Menu }
