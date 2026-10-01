export interface SauceUser {
    username: string
    password: string
    displayname: string
    permissions?: string[]

}
export interface SauceInvalidUser {
    username: string
    password: string
    expectedError: string


}
export interface SauceProduct {
    name: string
    price: string
    description?: string
    itemid: string

}

export interface sauceDemoTestData {
    users: {
        standardUser: SauceUser
        problemUser: SauceUser
        performanceGlitchUser: SauceUser
        errorUser: SauceUser
        visualUser: SauceUser
        //         standard_user
        // locked_out_user
        // problem_user
        // performance_glitch_user
        // error_user
        // visual_user

    }
    InvalidUsers: {
        userinvalid: SauceInvalidUser
        passwordinvalid: SauceInvalidUser
        lockedOutUser: SauceInvalidUser

        emptyCredentials: SauceInvalidUser
        //        
        //

    }
    urls: {
        base: string
        login: string
        inventory: string
        cart: string
        checkout: string
        checkoutstepone: string
        checkoutsteptwo: string
    }

    expectedElements: {
        loginPage: {
            title: string
            usernameplaceholder: string
            passwordplaceholder: string
            loginbutton: string
            logotext: string
        }
        inventorypage: {
            title: string
            productcount: number
            sortdropdowntext: string
        }
        cartpage: {
            title: string
            checkoutbutton: string
            continueshoppingbutton: string

        }
        checkoutpage: {
            title: string
            firstnameplaceholder: string
            lastnameplaceholder: string
            postalcodeplaceholder: string
            continuebutton: string
            cancelbutton: string

        }
        checkoutpageTwo: {
            title: string
            paymentinformation: string
            Shippinginformation: string
            PriceTotal: string
            Finishbutton: string


        };
        completepage: {
            title: string
            completeHeaderText: string;
            completeMessageText: string;
            backHomeButtonText: string;
        };
    };
    products: SauceProduct[];
    testscenairos: {
        smoke: string[]
        regression: string[]
        apitesting: string[]
        sanity: string[]
        unit: string[]
        uitest: string[]
    }
    testData: {
        checkout: {

            validuser: {
                firstname: string
                lastname: string
                postalcode: string
            };
            invaliduser: {
                emptyfirstname: {
                    firstname: string
                    lastname: string
                    postalcode: string
                    errormessage: string
                };
                emptylastname: {
                    firstname: string
                    lastname: string
                    postalcode: string
                    errormessage: string
                };
                emptypincode: {
                    firstname: string
                    lastname: string
                    postalcode: string
                    errormessage: string
                };
                emptyall: {
                    firstname: string
                    lastname: string
                    postalcode: string
                    errormessage: string
                }

            }
        }
        cart: {
            testproducts: string[];
            singleproduct: string;
            expectedprice: {
                [key: string]: string;
            }
            expectedtotal: {
                singleitem: string;
                twoitems: string;
                threeitem: string;
            }

        }
        ordercompleteion: {
            successMessage: string;
            completeText: string;
            backButtonText: string;
        }
        performance: {
            maxLoadTime: number;
            maxOperationTime: number;
            maxSortTime: number;
        };
        viewports: {
            mobile: { width: number; height: number };
            tablet: { width: number; height: number };
            desktop: { width: number; height: number };
        };

    }


}


export const sauceDemoTestData: sauceDemoTestData = {
    users: {
        standardUser: {
            username: "standard_user",
            password: "secret_sauce",
            displayname: "Standard User",
            permissions: ["read", "write", "execute"]
        },
        problemUser: {
            username: "problem_user",
            password: "secret_sauce",
            displayname: "Problem User",
            permissions: ["read"]
        },
        performanceGlitchUser: {
            username: "performance_glitch_user",
            password: "secret_sauce",
            displayname: "Performance Glitch User",
            permissions: ["read"]
        },
        errorUser: {
            username: "error_user",
            password: "secret_sauce",
            displayname: "Error User",
            permissions: ["read"]
        },
        visualUser: {
            username: "visual_user",
            password: "secret_sauce",
            displayname: "Visual User",
            permissions: ["read"]
        }
    },
    InvalidUsers: {
        userinvalid: {
            username: "invalid_user",
            password: "secret_sauce",
            expectedError: "Epic sadface: Username and password do not match any user in this service"
        },
        passwordinvalid: {
            username: "standard_user",
            password: "wrong_password",
            expectedError: "Epic sadface: Username and password do not match any user in this service"
        },
        lockedOutUser: {
            username: "locked_out_user",
            password: "secret_sauce",
            expectedError: "Epic sadface: Sorry, this user has been locked out."
        },
        emptyCredentials: {
            username: "",
            password: "",
            expectedError: "Epic sadface: Username is required"
        }
    },
    urls: {
        base: "https://saucedemo.com",
        login: "https://saucedemo.com/",
        inventory: "https://saucedemo.com/inventory.html",
        cart: "https://saucedemo.com/cart.html",
        checkout: "https://saucedemo.com/checkout-step-one.html",
        checkoutstepone: "https://saucedemo.com/checkout-step-one.html",
        checkoutsteptwo: "https://saucedemo.com/checkout-step-two.html"
    },
    expectedElements: {
        loginPage: {
            title: "Swag Labs",
            usernameplaceholder: "Username",
            passwordplaceholder: "Password",
            loginbutton: "Login",
            logotext: "Swag Labs"
        },
        inventorypage: {
            title: "Products",
            productcount: 6,
            sortdropdowntext: "Name (A to Z)"
        },
        cartpage: {
            title: "Your Cart",
            checkoutbutton: "Checkout",
            continueshoppingbutton: "Continue Shopping"
        },
        checkoutpage: {
            title: "Checkout: Your Information",
            firstnameplaceholder: "First Name",
            lastnameplaceholder: "Last Name",
            postalcodeplaceholder: "Zip/Postal Code",
            continuebutton: "Continue",
            cancelbutton: "Cancel"
        },
        checkoutpageTwo: {
            title: "Checkout: Overview",
            paymentinformation: "Payment Information:",
            Shippinginformation: "Shipping Information:",
            PriceTotal: "Price Total",
            Finishbutton: "Finish"
        },
        completepage: {
            title: "Checkout: Complete!",
            completeHeaderText: "Thank you for your order!",
            completeMessageText: "Your order has been dispatched, and will arrive shortly!",
            backHomeButtonText: "Back Home"
        }
    },
    products: [
        {
            itemid: "item_4_title_link",
            name: "Sauce Labs Backpack",
            price: "$29.99",
            description: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and pocket organization."
        },
        {
            itemid: "item_0_title_link",
            name: "Sauce Labs Bike Light",
            price: "$9.99",
            description: "A red light for your bike that helps keep you visible for nighttime riding. Comes with 3 light modes: steady, flashing, and slow-flash."
        },
        {
            itemid: "item_1_title_link",
            name: "Sauce Labs Bolt T-Shirt",
            price: "$15.99",
            description: "Get your testing superhero on with the Sauce Labs bolt t-shirt. From high-fashion to organized ditches, this shirt has you covered."
        },
        {
            itemid: "item_5_title_link",
            name: "Sauce Labs Fleece Jacket",
            price: "$49.99",
            description: "Its fleece lining transforms this fleece jacket into a cozy warm option for those cold winter testing days."
        },
        {
            itemid: "item_2_title_link",
            name: "Sauce Labs Onesie",
            price: "$7.99",
            description: "Rib knit infant onesie reinforces turning point seams with double needle stitching, features lap shoulders for easy over-the-head removal."
        },
        {
            itemid: "item_3_title_link",
            name: "T-Shirt (Red)",
            price: "$15.99",
            description: "This classic Sauce Labs t-shirt is perfect for everyday wear. Made from soft combed ringspun cotton."
        }
    ],
    testscenairos: {
        smoke: ["@login", "@checkout", "@sanity"],
        regression: ["@login", "@inventory", "@cart", "@checkout", "@api", "@visual"],
        apitesting: ["@API", "@auth", "@products"],
        sanity: ["@login", "@cart"],
        unit: ["@helpers", "@config"],
        uitest: ["@viewport", "@responsive", "@visual"]
    },
    testData: {
        checkout: {
            validuser: {
                firstname: "John",
                lastname: "Doe",
                postalcode: "12345"
            },
            invaliduser: {
                emptyfirstname: {
                    firstname: "",
                    lastname: "Doe",
                    postalcode: "12345",
                    errormessage: "Error: First Name is required"
                },
                emptylastname: {
                    firstname: "John",
                    lastname: "",
                    postalcode: "12345",
                    errormessage: "Error: Last Name is required"
                },
                emptypincode: {
                    firstname: "John",
                    lastname: "Doe",
                    postalcode: "",
                    errormessage: "Error: Postal Code is required"
                },
                emptyall: {
                    firstname: "",
                    lastname: "",
                    postalcode: "",
                    errormessage: "Error: First Name is required"
                }
            }
        },
        cart: {
            testproducts: ["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"],
            singleproduct: "Sauce Labs Backpack",
            expectedprice: {
                "Sauce Labs Backpack": "$29.99",
                "Sauce Labs Bike Light": "$9.99",
                "Sauce Labs Bolt T-Shirt": "$15.99",
                "Sauce Labs Fleece Jacket": "$49.99",
                "Sauce Labs Onesie": "$7.99",
                "T-Shirt (Red)": "$15.99"
            },
            expectedtotal: {
                singleitem: "Item total: $29.99",
                twoitems: "Item total: $39.98",
                threeitem: "Item total: $55.97"
            }
        },
        ordercompleteion: {
            successMessage: "Thank you for your order!",
            completeText: "Your order has been dispatched, and will arrive shortly!",
            backButtonText: "Back Home"
        },
        performance: {
            maxLoadTime: 5000,
            maxOperationTime: 1000,
            maxSortTime: 1500
        },
        viewports: {
            mobile: { width: 375, height: 667 },
            tablet: { width: 768, height: 1024 },
            desktop: { width: 1280, height: 720 }
        }
    }
};


