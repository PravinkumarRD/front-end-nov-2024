enum Menu {
    AMERICAN = 1,
    JAPANESE,
    INDIAN,
    ITALIAN
}

const MyOrder: Menu = Menu.INDIAN;

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