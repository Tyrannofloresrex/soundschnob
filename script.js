var coolBands = ["gorillaz", "tribe called quest", "a tribe called quest", "neon indian", "funkadelic", "parliament", "beastie boys", "the beastie boys", "b.e.a.s.t.i.e boys","the b.e.a.s.t.i.e boys", "kanye west", "pusha-t", "pusha t", "tyler, the creator", "tyler the creator", "prince", "neko case", "sam cooke", "yellow magic orchestra", "cut copy", "beck", "modest mouse", "bts", "the grateful dead", "kanye", "ye", "yeezy", "yeezus", "talking heads", "the talking heads", "kendrick", "kendrick lamar", "k dot", "k-dot", "thundercat", "thunder cat", "kamasi washington", "flying lotus", "flylo", "doom", "mf doom", "m.f. doom", "metal face doom", "m.f.-doom", "mf-doom"]
var hellaCool = ["red hot chili peppers", "rhcp", "sublime", "weezer", "green day", "eve6", "eve 6", "reel big fish", "real big fish"]
var howOriginal = ["the beatles", "the rolling stones", "radiohead", "beyonce", "michael jackson", "bob dylan", "the who", "eagles", "the eagles", "marvin gaye", "taylor swift", "t-swizzle", "t swizzle", "tom petty", "tom petty and the heartbreakers", "tom petty + the heartbreakers" ]
var notMusic = ["death grips"]

var genReplies = ["Pffft. They haven't made a good record in years, if ever.", "I don't pay attention to minor work.", "I don't think you know what music is.", "Broh, do you even listen to music?","Am I supposed to take you seriously?", "Yeah, I think NPR said they were cool.", "I don't listen to that because I only listen to music that no one else has heard of.", "I don't listen to commercial music."]
var coolReplies = ["That is a most excellent band! You are a being of impeccable taste.", "One of the greats.", "Yeah, you get it.", "Now I know that's right.", "That is most definitely where it's at.", "That's my jam!"]
var hellaReplies = ["Wowee, they are hella cool! You must be hella cool for listening to them.", "Man, I used to listen to that on my way to school.", "I danced to that in middle school, fer sure.", "Hella tight!", "I'm embarassed to listen to any of that, and you should be too."]
var originalReplies = ["How original.", "Yeah, my parents love that music.", "Cool, cool, I think I've heard like, one or two of their songs.", "You know there is new music, right?", "Cool, so do you only listen to what's on the radio?", "Yeah, that's good for when you're at the grocery store, or waiting at the DMV."]
var notMusicReply = "That's not music."

var $submit = $("#submit")
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }
var submitBand = function(){
    var bandInput = $("#name_field").val().trim().toLowerCase()
    var bandReply = bandInput + "? <br>"
    if (bandInput=== "") {
        return
    }
    
    else if (coolBands.includes(bandInput)){
       bandReply += (coolReplies.sample())
    }
    else if (hellaCool.includes(bandInput)){
        bandReply += (hellaReplies.sample())
    }
    else if (howOriginal.includes(bandInput)){
        bandReply += (originalReplies.sample())
    }
    else if (notMusic.includes(bandInput)){
        bandReply += (notMusicReply)
    }
    else { 
        bandReply += (genReplies.sample())
    }
    $("#snark-tank").html(bandReply)
    
    $('#name_field').val("");
    

} 
$submit.click(submitBand)

$("#name_field").keydown(function(event){
    if (event.which == 13){
        submitBand()
    }
})