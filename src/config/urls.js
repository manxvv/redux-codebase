const Urls = {
    baseURL: "http://192.168.1.23:4949",
    
    signin: "/api/login",
    signup: "/api/register",
    getBCGCS: '/client/getBCGCS',
    signout: "/logout",
    refresh: "/refresh",
    roles: '/roles',
    users:'/api/users',
    setpassword: '/setuppassword/stepOne',
    registeradmin:'/api/register-admin',
    companylist:'/api/companylist',
    verify:"/api/verify-email",
    getmembership:'/api/membership',
    fanclub:'/api/fanclublist',
    updatemember:"/api/update-member",
    campaign:"/api/campaign",
    patchcampaign:"/api/campaign/verify",
    isblocked:"/api/user-block"

}

export default Urls