function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();

    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + '9d78d3d3-d98c-4970-b90c-82804474852f',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;
                summonerName = json[SUMMONER_NAME_NOSPACES].name;

                document.getElementById("sName").innerHTML = summonerName;
                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
}
