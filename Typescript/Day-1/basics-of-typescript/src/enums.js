var Menu;
(function (Menu) {
    Menu[Menu["AMERICAN"] = 1] = "AMERICAN";
    Menu[Menu["JAPANESE"] = 2] = "JAPANESE";
    Menu[Menu["INDIAN"] = 3] = "INDIAN";
    Menu[Menu["ITALIAN"] = 4] = "ITALIAN";
})(Menu || (Menu = {}));
const MyOrder = Menu.INDIAN;
switch (+MyOrder) {
    case 1:
        console.log(`Customer has orderd American Food!`);
        break;
    case 2:
        console.log(`Customer has orderd Japanese Food!`);
        break;
    case 3:
        console.log(`Customer has orderd Indian Food!`);
        break;
    case 4:
        console.log(`Customer has orderd Italian Food!`);
        break;
    default:
        break;
}
//# sourceMappingURL=enums.js.map