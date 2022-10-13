//refresh your page if the script does not work properly
const customplaceid = true //if set to false it will grab the id from the current url
let placeid = "place id here" // will only work if customplaceid is set to true
const jobid = "place jobid here"

if (customplaceid) {
    Roblox.GameLauncher.joinGameInstance(placeid, jobid);
} else {
    let placeid = String(window.location.href).replace(/\D/g, "");
    Roblox.GameLauncher.joinGameInstance(placeid, jobid);
}