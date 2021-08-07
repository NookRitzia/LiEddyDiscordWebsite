// JavaScript source code
let buttonIDs = ["TopDiscordLogoButton", "TopDiscordTextButton", "TopAboutButton", "TopCoursesButton", "TopEventsButton",
    "TopSupportButton", "BottomYoutubeButton", "BottomTwitterButton", "BottomFacebookButton", "BottomInstagramButton",
    "BottomResourcesButton", "BottomCoursesButton", "BottomPolicyButton"];

let buttonLinks = ["https://discord.com/", "https://discord.com/", "About.html", null, "Events.html",
    null, "https://www.youtube.com/user/NookRitzia", "https://twitter.com/", "https://www.facebook.com/", "https://www.instagram.com/nookysnooky/",
    null, null, null];

function assignButtonLinks() {
    for (let i = 0; i < buttonIDs.length; i++) {
        if (buttonLinks[i] != null) {
            button = document.getElementById(buttonIDs[i]);
            button.style.cursor = "pointer";
            if (buttonLinks[i].substring(0, 8) == "https://") {
                button.onclick = () => window.open(buttonLinks[i]);
            }
            else {
                button.onclick = () => document.location.href = buttonLinks[i];
            }
        }
    }
    return true;
}



assignButtonLinks();



