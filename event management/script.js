document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const userID = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Hardcoded credentials for admin, vendor, and user
    const credentials = {
        admin: "admin",
        vendor: "vendor",
        user: "user"
    };

    // Check if entered credentials match any of the hardcoded credentials
    if (credentials[userID] && credentials[userID] === password) {
        if (userID === "admin") {
            showAdminWelcomePage();
        } else if (userID === "vendor") {
            showVendorDashboard();
        } else if (userID === "user") {
            showUserWelcomePage();
        }
    } else {
        message.textContent = "Invalid User ID or Password.";
        message.classList.remove("success");
        message.classList.add("error");
    }
});

// Cancel button functionality to clear input fields
document.getElementById("cancelButton").addEventListener("click", function () {
    document.getElementById("userid").value = '';
    document.getElementById("password").value = '';
    document.getElementById("message").textContent = '';
});

// Show the admin welcome page
function showAdminWelcomePage() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("adminWelcomePage").style.display = "block";
}

// Show the admin maintenance menu page
function showAdminMaintenancePage() {
    document.getElementById("adminWelcomePage").style.display = "none";
    document.getElementById("adminMaintenancePage").style.display = "block";
}

// Show the vendor dashboard
function showVendorDashboard() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("vendorDashboardPage").style.display = "block";
}

// Show the user welcome page
function showUserWelcomePage() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("userWelcomePage").style.display = "block";
}

// Show the cart options page
function showCartPage() {
    document.getElementById("userWelcomePage").style.display = "none";
    document.getElementById("userCartPage").style.display = "block";
}

// Show the guest list options page
function showGuestListPage() {
    document.getElementById("userWelcomePage").style.display = "none";
    document.getElementById("userGuestListPage").style.display = "block";
}

// Show the order status options page
function showOrderStatusPage() {
    document.getElementById("userWelcomePage").style.display = "none";
    document.getElementById("userOrderStatusPage").style.display = "block";
}

// Show the item management page
function showItemManagementPage() {
    document.getElementById("vendorDashboardPage").style.display = "none";
    document.getElementById("itemManagementPage").style.display = "block";
}

// Show the add new item management page
function showAddNewItemPage() {
    document.getElementById("vendorDashboardPage").style.display = "none";
    document.getElementById("addNewItemPage").style.display = "block";
}

// Show the transaction page
function showTransactionPage() {
    document.getElementById("vendorDashboardPage").style.display = "none";
    document.getElementById("transactionPage").style.display = "block";
}

// Button to go back to the main login page
function goToLoginPage() {
    document.getElementById("vendorDashboardPage").style.display = "none";
    document.getElementById("adminWelcomePage").style.display = "none";
    document.getElementById("userWelcomePage").style.display = "none";
    document.getElementById("itemManagementPage").style.display = "none";
    document.getElementById("addNewItemPage").style.display = "none";
    document.getElementById("transactionPage").style.display = "none";
    document.getElementById("userCartPage").style.display = "none";
    document.getElementById("userGuestListPage").style.display = "none";
    document.getElementById("userOrderStatusPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("userid").value = '';
    document.getElementById("password").value = '';
    document.getElementById("message").textContent = '';
}

// Buttons on the vendor dashboard
document.getElementById("yourItemButton").addEventListener("click", function () {
    showItemManagementPage();
});

document.getElementById("addNewItemButton").addEventListener("click", function () {
    showAddNewItemPage();
});

document.getElementById("transactionButton").addEventListener("click", function () {
    showTransactionPage();
});

document.getElementById("logoutButton").addEventListener("click", function () {
    goToLoginPage();
});

// Handle navigation from the item management page
document.getElementById("insertItemButton").addEventListener("click", function () {
    alert("Insert button clicked.");
});

document.getElementById("deleteItemButton").addEventListener("click", function () {
    alert("Delete button clicked.");
});

document.getElementById("backToDashboardButton").addEventListener("click", function () {
    document.getElementById("itemManagementPage").style.display = "none";
    document.getElementById("vendorDashboardPage").style.display = "block";
});



// Handle navigation from the add new item page
document.getElementById("productStatusButton").addEventListener("click", function () {
    alert("Product Status button clicked.");
});

document.getElementById("requestItemButton").addEventListener("click", function () {
    alert("Request Item button clicked.");
});

document.getElementById("viewProductButton").addEventListener("click", function () {
    alert("View Product button clicked.");
});

document.getElementById("backToDashboardFromAddNewItemButton").addEventListener("click", function () {
    document.getElementById("addNewItemPage").style.display = "none";
    document.getElementById("vendorDashboardPage").style.display = "block";
});



// Handle navigation from the transaction page
document.getElementById("userRequestButton").addEventListener("click", function () {
    alert("User Request button clicked.");
});

document.getElementById("backToDashboardFromTransactionButton").addEventListener("click", function () {
    document.getElementById("transactionPage").style.display = "none";
    document.getElementById("vendorDashboardPage").style.display = "block";
});



// Button functionality on the admin welcome page
document.getElementById("maintenanceMenuButton").addEventListener("click", function () {
    showAdminMaintenancePage();
});



document.getElementById("goBackFromAdminWelcomeButton").addEventListener("click", function () {
    goToLoginPage();
});

// Handle navigation on the admin maintenance menu page
document.getElementById("addMembershipButton").addEventListener("click", function () {
    alert("Add Membership button clicked.");
});

document.getElementById("updateMembershipButton").addEventListener("click", function () {
    alert("Update Membership button clicked.");
});

document.getElementById("addUserButton").addEventListener("click", function () {
    alert("Add User button clicked.");
});

document.getElementById("updateUserButton").addEventListener("click", function () {
    alert("Update User button clicked.");
});

document.getElementById("vendorUserManagementButton").addEventListener("click", function () {
    alert("Vendor User Management button clicked.");
});

document.getElementById("vendorManagementButton").addEventListener("click", function () {
    alert("Vendor Management button clicked.");
});

document.getElementById("backToAdminWelcomeButton").addEventListener("click", function () {
    document.getElementById("adminMaintenancePage").style.display = "none";
    document.getElementById("adminWelcomePage").style.display = "block";
});

document.getElementById("goBackFromAdminMaintenanceButton").addEventListener("click", function () {
    goToAdminWelcomePage();
});

// Handle navigation on the user welcome page
document.getElementById("vendorButton").addEventListener("click", function () {
    alert("Vendor button clicked.");
});

document.getElementById("cartButton").addEventListener("click", function () {
    showCartPage();
});

document.getElementById("guestListButton").addEventListener("click", function () {
    showGuestListPage();
});

document.getElementById("orderStatusButton").addEventListener("click", function () {
    showOrderStatusPage();
});

document.getElementById("backToLoginFromUserWelcomeButton").addEventListener("click", function () {
    goToLoginPage();
});


// Handle navigation on the user cart page
document.getElementById("paymentButton").addEventListener("click", function () {
    alert("Payment button clicked.");
});

document.getElementById("totalAmountButton").addEventListener("click", function () {
    alert("Total Amount button clicked.");
});

document.getElementById("cancelCartButton").addEventListener("click", function () {
    document.getElementById("userCartPage").style.display = "none";
    document.getElementById("userWelcomePage").style.display = "block";
});

document.getElementById("goBackFromUserCartPage").addEventListener("click", function () {
    goToUserWelcomePage();
});

// Handle navigation on the user guest list page
document.getElementById("updateGuestButton").addEventListener("click", function () {
    alert("Update Guest button clicked.");
});

document.getElementById("deleteGuestButton").addEventListener("click", function () {
    alert("Delete Guest button clicked.");
});

document.getElementById("goBackFromUserGuestListPage").addEventListener("click", function () {
    goToUserWelcomePage();
});

// Handle navigation on the user order status page
document.getElementById("checkStatusButton").addEventListener("click", function () {
    alert("Check Status button clicked.");
});

document.getElementById("goToWelcomePageButton").addEventListener("click", function () {
    goToUserWelcomePage();
});


