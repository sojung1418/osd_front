// SignIn
export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const AUTH_SIGNIN_FAILURE = "AUTH_SIGNIN_FAILURE";
export const AUTH_SIGNIN_IS_NOT_MEMBER = "AUTH_SIGNIN_IS_NOT_MEMBER";
export const AUTH_SIGNIN_IS_NOT_PASSWORD = "AUTH_SIGNIN_IS_NOT_PASSWORD";

// FBSignIn
export const AUTH_FBSIGNIN = "AUTH_FBSIGNIN";
export const AUTH_FBSIGNIN_SUCCESS = "AUTH_FBSIGNIN_SUCCESS";
export const AUTH_FBSIGNIN_FAILURE = "AUTH_FBSIGNIN_FAILURE";
export const AUTH_FBSIGNIN_IS_NOT_MEMBER = "AUTH_FBSIGNIN_IS_NOT_MEMBER";

// FBSignUp
export const AUTH_FBSIGNUP = "AUTH_FBSIGNUP";
export const AUTH_FBSIGNUP_SUCCESS = "AUTH_FBSIGNUP_SUCCESS";
export const AUTH_FBSIGNUP_FAILURE = "AUTH_FBSIGNUP_FAILURE";
export const AUTH_FBSIGNUP_OVERLAP_MEMBER = "AUTH_FBSIGNUP_OVERLAP_MEMBER";

// LOGOUT
export const AUTH_SIGNOUT = "AUTH_SIGNOUT";

// Register
export const AUTH_SIGNUP = "AUTH_SIGNUP";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_SIGNUP_FAILURE = "AUTH_SIGNUP_FAILURE";

// login_chack
export const AUTH_CHECK_TOKEN = "AUTH_CHECK_TOKEN";
export const AUTH_CHECK_TOKEN_SUCCESS = "AUTH_CHECK_TOKEN_SUCCESS";
export const AUTH_CHECK_TOKEN_FAILURE = "AUTH_CHECK_TOKEN_FAILURE";

// email check
export const AUTH_CHECK_EMAIL = "AUTH_CHECK_EMAIL";
export const AUTH_CHECK_EMAIL_SUCCESS = "AUTH_CHECK_EMAIL_SUCCESS";
export const AUTH_CHECK_EMAIL_FAILURE = "AUTH_CHECK_EMAIL_FAILURE";

// nickname check
export const AUTH_CHECK_NICKNAME = "AUTH_CHECK_NICKNAME";
export const AUTH_CHECK_NICKNAME_SUCCESS = "AUTH_CHECK_NICKNAME_SUCCESS";
export const AUTH_CHECK_NICKNAME_FAILURE = "AUTH_CHECK_NICKNAME_FAILURE";

// facebook user check
export const AUTH_CHECK_FBUSER = "AUTH_CHECK_FBUSER";
export const AUTH_CHECK_FBUSER_SUCCESS = "AUTH_CHECK_FBUSER_SUCCESS";
export const AUTH_CHECK_FBUSER_FAILURE = "AUTH_CHECK_FBUSER_FAILURE";

// insert userDetail
export const INSERT_USER_DETAIL = "INSERT_USER_DETAIL";
export const INSERT_USER_DETAIL_SUCCESS = "INSERT_USER_DETAIL_SUCCESS";
export const INSERT_USER_DETAIL_FAILURE = "INSERT_USER_DETAIL_FAILURE";

////////////////////////////////////////////////////////////////////////////
// design
////////////////////////////////////////////////////////////////////////////

// design List
export const GET_DESIGN_LIST = "GET_DESIGN_LIST";
export const DESIGN_LIST_CLEAR = "DESIGN_LIST_CLEAR";
export const DESIGN_LIST_FAIL = "DESIGN_LIST_FAIL";
export const GET_DESIGN_DETAIL = "GET_DESIGN_DETAIL";
export const DESIGN_DETAIL_RESET = "DESIGN_DETAIL_RESET";
export const GET_DESIGN_DETAIL_VIEW = "GET_DESIGN_DETAIL_VIEW";
export const GET_DESIGN_DETAIL_STEP = "GET_DESIGN_DETAIL_STEP";
export const GET_DESIGN_DETAIL_STEP_CARD = "GET_DESIGN_DETAIL_STEP_CARD";
export const GET_DESIGN_ISSUE_LIST = "GET_DESIGN_ISSUE_LIST";
export const GET_DESIGN_ISSUE_DETAIL = "GET_DESIGN_ISSUE_DETAIL";

// create design
export const CREATE_DESIGN = "CREATE_DESIGN";
export const CREATE_DESIGN_SUCCESS = "CREATE_DESIGN_SUCCESS";
export const CREATE_DESIGN_FAILURE = "CREATE_DESIGN_FAILURE";

// create board
export const CREATE_BOARD = "CREATE_BOARD";
export const CREATE_BOARD_SUCCESS = "CREATE_BOARD_SUCCESS";
export const CREATE_BOARD_FAILURE = "CREATE_BOARD_FAILURE";

// Get Board
export const GET_BOARD = "GET_BOARD";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";
export const GET_BOARD_FAILURE = "GET_BOARD_FAILURE";

// create card
export const CREATE_CARD = "CREATE_CARD";
export const CREATE_CARD_SUCCESS = "CREATE_CARD_SUCCESS";
export const CREATE_CARD_FAILURE = "CREATE_CARD_FAILURE";

// Get card
export const GET_CARD = "GET_CARD";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";

// Get card detail
export const GET_CARD_DETAIL = "GET_CARD_DETAIL";
export const GET_CARD_DETAIL_SUCCESS = "GET_CARD_DETAIL_SUCCESS";
export const GET_CARD_DETAIL_FAILURE = "GET_CARD_DETAIL_FAILURE";

// update card title
export const UPDATE_CARD_TITLE = "UPDATE_CARD_TITLE";
export const UPDATE_CARD_TITLE_SUCCESS = "UPDATE_CARD_TITLE_SUCCESS";
export const UPDATE_CARD_TITLE_FAILURE = "UPDATE_CARD_TITLE_FAILURE";

// update card content
export const UPDATE_CARD_CONTENT = "UPDATE_CARD_CONTENT";
export const UPDATE_CARD_CONTENT_SUCCESS = "UPDATE_CARD_CONTENT_SUCCESS";
export const UPDATE_CARD_CONTENT_FAILURE = "UPDATE_CARD_CONTENT_FAILURE";

// update card images
export const UPDATE_CARD_IMAGES = "UPDATE_CARD_IMAGES";
export const UPDATE_CARD_IMAGES_SUCCESS = "UPDATE_CARD_IMAGES_SUCCESS";
export const UPDATE_CARD_IMAGES_FAILURE = "UPDATE_CARD_IMAGES_FAILURE";

// update card sources
export const UPDATE_CARD_SOURCES = "UPDATE_CARD_SOURCES";
export const UPDATE_CARD_SOURCES_SUCCESS = "UPDATE_CARD_SOURCES_SUCCESS";
export const UPDATE_CARD_SOURCES_FAILURE = "UPDATE_CARD_SOURCES_FAILURE";



////////////////////////////////////////////////////////////////////////////
// group
////////////////////////////////////////////////////////////////////////////

// group List
export const GET_GROUP_LIST = "GET_GROUP_LIST";
export const GROUP_LIST_CLEAR = "GROUP_LIST_CLEAR";
export const GROUP_LIST_FAIL = "GROUP_LIST_FAIL";

// create group
export const CREATE_NEW_GROUP = "CREATE_NEW_GROUP";
export const CREATE_GROUP_FAILURE = "CREATE_GROUP_FAILURE";

// group detail page
export const GET_GROUP_DETAIL = "GET_GROUP_DETAIL";
export const GET_DESIGN_IN_GROUP = "GET_DESIGN_IN_GROUP";
export const GET_DESIGN_IN_GROUP_CLEAR = "GET_DESIGN_IN_GROUP_CLEAR";
export const DESIGN_IN_GROUP_FAIL = "DESIGN_IN_GROUP_FAIL";
export const GET_GROUP_IN_GROUP = "GET_GROUP_IN_GROUP";
export const GET_GROUP_IN_GROUP_CLEAR = "GET_GROUP_IN_GROUP_CLEAR";
export const GROUP_IN_GROUP_FAIL = "GROUP_IN_GROUP_FAIL";
export const GET_WAITING_DESIGN = "GET_WAITING_DESIGN";
export const GET_WAITING_GROUP = "GET_WATING_GROUP";
export const GET_WAITING_DATA_FAIL = "GET_WAITING_DATA_FAIL";

// group join 
export const DELETE_DESIGN_IN_GROUP_SUCCESS = "DELETE_DESIGN_IN_GROUP_SUCCESS";
export const DELETE_DESIGN_IN_GROUP_FAIL = "DELETE_DESIGN_IN_GROUP_FAIL";
export const DELETE_GROUP_IN_GROUP_SUCCESS = "DELETE_GROUP_IN_GROUP_SUCCESS";
export const DELETE_GROUP_IN_GROUP_FAIL = "DELETE_GROUP_IN_GROUP_FAIL";

////////////////////////////////////////////////////////////////////////////
// designer
////////////////////////////////////////////////////////////////////////////

// designer List
export const GET_DESIGNER_LIST = "GET_DESIGNER_LIST";
export const DESIGNER_LIST_CLEAR = "DESIGNER_LIST_CLEAR";
export const DESIGNER_LIST_FAIL = "DESIGNER_LIST_FAIL";
export const GET_DESIGNER_DETAIL = "GET_DESIGNER_DETAIL";
export const GET_DESIGN_IN_DESIGNER = "GET_DESIGN_IN_DESIGNER";
export const GET_DESIGN_IN_DESIGNER_CLEAR = "GET_DESIGN_IN_DESIGNER_CLEAR";
export const DESIGN_IN_DESIGNER_FAIL = "DESIGN_IN_DESIGNER_FAIL";
export const GET_LIKE_IN_DESIGNER = "GET_LIKE_IN_DESIGNER";
export const GET_LIKE_IN_DESIGNER_CLEAR = "GET_LIKE_IN_DESIGNER_CLEAR";
export const LIKE_IN_DESIGNER_FAIL = "LIKE_IN_DESIGNER_FAIL";


////////////////////////////////////////////////////////////////////////////
// commons
////////////////////////////////////////////////////////////////////////////

// get cagetgory level1
export const GET_CATEGORY_LEVEL1 = "GET_CATEGORY_LEVEL1";
export const GET_CATEGORY_LEVEL1_SUCCESS = "GET_CATEGORY_LEVEL1_SUCCESS";
export const GET_CATEGORY_LEVEL1_FAILURE = "GET_CATEGORY_LEVEL1_FAILURE";

// get cagetgory level2
export const GET_CATEGORY_LEVEL2 = "GET_CATEGORY_LEVEL2";
export const GET_CATEGORY_LEVEL2_SUCCESS = "GET_CATEGORY_LEVEL2_SUCCESS";
export const GET_CATEGORY_LEVEL2_FAILURE = "GET_CATEGORY_LEVEL2_FAILURE";

// my page
export const GET_MY_DETAIL = "GET_MY_DETAIL";
export const GET_MY_DESIGN = "GET_MY_DESIGN";
export const GET_MY_DESIGN_CLEAR = "GET_MY_DESIGN_CLEAR";
export const MY_DESIGN_FAIL = "MY_DESIGN_FAIL";
export const GET_MY_GROUP = "GET_MY_GROUP";
export const GET_MY_GROUP_CLEAR = "GET_MY_GROUP_CLEAR";
export const MY_GROUP_FAIL = "MY_GROUP_FAIL";
export const GET_MY_LIKE_DESIGN = "GET_MY_LIKE_DESIGN";
export const GET_MY_LIKE_DESIGN_CLEAR = "GET_MY_LIKE_DESIGN_CLEAR";
export const MY_LIKE_DESIGN_FAIL = "MY_LIKE_DESIGN_FAIL";
export const GET_MY_LIKE_GROUP = "GET_MY_LIKE_GROUP";
export const GET_MY_LIKE_GROUP_CLEAR = "GET_MY_LIKE_GROUP_CLEAR";
export const GET_MY_LIKE_DESIGNER = "GET_MY_LIKE_DESIGNER";
export const GET_MY_LIKE_DESIGNER_CLEAR = "GET_MY_LIKE_DESIGNER_CLEAR";
export const MY_LIKE_DESIGNER_FAIL = "MY_LIKE_DESIGNER_FAIL";

////////////////////////////////////////////////////////////////////////////
// search
////////////////////////////////////////////////////////////////////////////

// search member
export const GET_SEARCH_MEMVER = "GET_SEARCH_MEMBER";
export const GET_SEARCH_MEMBER_SUCCESS = "GET_SEARCH_MEMBER_SUCCESS";
export const GET_SEARCH_MEMBER_FAILURE = "GET_SEARCH_MEMBER_FAILURE";
