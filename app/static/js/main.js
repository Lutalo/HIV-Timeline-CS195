function navHighlight()
{
    //  Gets the pathname of current URL, omitting the leading forward slash
    var active = window.location.pathname;
    active = active.slice(1);
    //  console.log(active);
    
    
    //  If pathname is '', home gets hard coded active class
    //  Basically hard-coded switch cases for the drop-down pages, because their path name
    //  does not match the ID they have.
    //  the cases with pages with matching IDs and pathnames are caught at the end
    
    
    if (active === "")
    {
        document.getElementById("home").setAttribute("class", "active");
        //  console.log("hit home case");
    }
    
    else if (active == "support" || active == "testing")
    {
        //  console.log("before services");
        document.getElementById("services").setAttribute("class", "active");
    }
    
    else if (active == "aboutHIV" || active == "prevention" || active == "videos")
    {
        document.getElementById("information").setAttribute("class", "active");
        //  console.log("hit info");
    }
    else if (active == "advocacy" || active == "volunteer" || active == "classes")
    {
        document.getElementById("get-involved").setAttribute("class", "active");
    }
    else
    {
        document.getElementById(active).setAttribute("class", "active");
        //  console.log("hit else statement");
    }
}