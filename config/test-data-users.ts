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

}