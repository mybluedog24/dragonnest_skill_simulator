var str1 = "Already reached highest skill level."; 
var str2 = "Only when character level "; 
var str3 = " can learn this skill."; 
var str4 = "Already reached maximum SP."; 
var str5 = ""; 
var str5_sub = "";
var str6 = "SP Required: "; 
var str7 = "Already reached lowest skill level."; 
var str8 = "Prerequisite skill exists. Can not lower your skill level."; 
var str9 = "Prerequisite skill restriction."; 
var str10 = "Ctrl+V: Paste"; 
var str11 = "Required "; 
var str11_sub = " at least ";
var str11_sub1 = " SP.";
var str12 = "Do you wish to unlock the prerequisite skills?"; 
var str13 = "Not enough SP."; 
var str14 = "Already reached maximum SP."; 


var g_var = new Object();
g_var.cls_box = "box_";
g_var.btn_plus = "image/s_btn_plus_";
g_var.btn_minus = "image/s_btn_minus_";
g_var.btn_all = "image/s_btn_master_";
g_var.img_icon = "image/icon/";
g_var.cls_info = "box_info_";
g_var.img_ext = ".gif";
g_var.sim_name = "dn";
g_var.sim_level = "master";
g_var.sim_icon = "uicon";
g_var.ass_folder = "web";
g_var.readonly = false;
function set_readonly(b) {
    g_var.readonly = b
}
function skill_draw_tree(f) {
    var e = $("#skill_tmpl").html();
    e = e.replace(/SKSIM/gm, "SKILL");
    for (var d = 0; d < s.length; d++) {
        $("#" + s[d].type + "_div").css({
            position: "relative"
        });
        set_sksim_bg(s[d]);
        for (var c = 0; c < s[d].skill.length; c++) {
            var b = s[d].skill[c];
            $("#" + s[d].type + "_div").append(e);
            set_skill_box(d, c)
        }
    }
    reset_skill_tree(true);
    on_skill_draw_tree()
}
function set_sksim_bg(b) {
    on_set_sksim_bg(b)
}
function reset_skill_tree(d) {
    g_chlv = parseInt($("#chlv").val());
    for (var c = 0; c < s.length; c++) {
        for (var b = 0; b < s[c].skill.length; b++) {
            init_skill(s[c].skill[b], d)
        }
    }
    on_reset_skill_tree()
}
function set_skill_box(d, c) {
    var b = s[d].skill[c];
    $("#SKILL_TMPL_BOX_ID").attr("id", "S_" + b.id);
    $("#S_" + b.id).attr("name", "IDX_" + d + "_" + c);
    $("#S_" + b.id).css({
        position: "absolute",
        top: get_position_y(s[d].type, b.x),
        left: get_position_x(s[d].type, b.y)
    });
    set_skilltag_id(b.id)
}
function set_skilltag_id(b) {
    $("#SKILL_TMPL_ICON_IMAGE").attr("id", "ICON_IMAGE_" + b);
    $("#SKILL_TMPL_PLUS_LINK").attr("id", "PLUS_LINK_" + b);
    $("#SKILL_TMPL_PLUS_IMAGE").attr("id", "PLUS_IMAGE_" + b);
    $("#SKILL_TMPL_MINUS_LINK").attr("id", "MINUS_LINK_" + b);
    $("#SKILL_TMPL_MINUS_IMAGE").attr("id", "MINUS_IMAGE_" + b);
    $("#SKSIM_TMPL_TOP_BOX").attr("id", "SKSIM_TMPL_TOP_" + b);
    $("#SKSIM_TMPL_BOTTOM_BOX").attr("id", "SKSIM_TMPL_BOTTOM_" + b);
    $("#SKSIM_TMPL_MAIN_BOX").attr("id", "SKSIM_TMPL_MAIN_" + b);
    $("#SKILL_TMPL_INFO_DIV").attr("id", "INFO_DIV_" + b);
    $("#SKILL_TMPL_INFO_CURRENT").attr("id", "INFO_CURRENT_" + b);
    $("#SKILL_TMPL_INFO_MAX").attr("id", "INFO_MAX_" + b);
    $("#SKILL_TMPL_ALL_LINK").attr("id", "ALL_LINK_" + b);
    $("#SKILL_TMPL_ALL_IMAGE").attr("id", "ALL_IMAGE_" + b);
    $("#SKILL_TMPL_PLUS_LINK2").attr("id", "PLUS_LINK2_" + b)
}
function init_skill(b, e) {
    var d = b.defaultpt;
    var c = false;
    if (e && b.currentpt && b.on_flag) {
        d = b.currentpt;
        if (b.on_flag == "on" || parseInt(b.currentpt) > 0) {
            c = true
        }
    }
    $("#INFO_CURRENT_" + b.id).html(d);
    $("#INFO_MAX_" + b.id).html(b.maxpt);
    if (c || (g_chlv >= parseInt(b.lvlimit) && b.parent == null)) {
        skill_open(b.id)
    } else {
        if (b.parent == null) {
            skill_close(b.id)
        } else {
            skill_plus_open(b.id)
        }
    }
}
function get_skilldata(e) {
    var d = $("#S_" + e).attr("name");
    if (d == null) {
        return null
    }
    var c = d.split("_")[1];
    var b = d.split("_")[2];
    return s[c].skill[b]
}
function skill_open(e) {
    var d = "on";
    var b = "on";
    var c = get_skilldata(e);
    if (g_chlv < parseInt(c.lvlimit)) {
        return
    }
    $("#ICON_IMAGE_" + e).attr("src", g_var.img_icon + c.openicon);
    $("#SKSIM_TMPL_TOP_" + e).removeClass().addClass(g_var.cls_box + b + "_top");
    $("#SKSIM_TMPL_BOTTOM_" + e).removeClass().addClass(g_var.cls_box + b + "_bottom");
    $("#SKSIM_TMPL_MAIN_" + e).removeClass().addClass(g_var.cls_box + b);
    $("#INFO_DIV_" + e).removeClass().addClass(g_var.cls_info + b);
    $("#PLUS_IMAGE_" + e).attr("src", g_var.btn_plus + d + g_var.img_ext);
    $("#MINUS_IMAGE_" + e).attr("src", g_var.btn_minus + d + g_var.img_ext);
    $("#ALL_IMAGE_" + e).attr("src", g_var.btn_all + d + g_var.img_ext);
    if (g_var.readonly == false) {
        $("#PLUS_LINK2_" + e).attr("href", "javascript:skill_plus(" + e + ");");
        $("#PLUS_LINK_" + e).attr("href", "javascript:skill_plus(" + e + ");");
        $("#MINUS_LINK_" + e).attr("href", "javascript:skill_minus(" + e + ");");
        $("#ALL_LINK_" + e).attr("href", "javascript:skill_max(" + e + ");")
    }
}
function skill_plus_open(f) {
    var d = "off";
    var e = "off";
    var b = "off";
    var c = get_skilldata(f);
    if (g_chlv < parseInt(c.lvlimit)) {
        return
    }
    e = "on";
    $("#ICON_IMAGE_" + f).attr("src", g_var.img_icon + c.closeicon);
    $("#INFO_DIV_" + f).removeClass().addClass(g_var.cls_info + b);
    $("#PLUS_IMAGE_" + f).attr("src", g_var.btn_plus + e + g_var.img_ext);
    $("#MINUS_IMAGE_" + f).attr("src", g_var.btn_minus + d + g_var.img_ext);
    $("#ALL_IMAGE_" + f).attr("src", g_var.btn_all + d + g_var.img_ext);
    $("#SKSIM_TMPL_TOP_" + f).removeClass().addClass(g_var.cls_box + d + "_top");
    $("#SKSIM_TMPL_BOTTOM_" + f).removeClass().addClass(g_var.cls_box + d + "_bottom");
    $("#SKSIM_TMPL_MAIN_" + f).removeClass().addClass(g_var.cls_box + d);
    $("#PLUS_LINK2_" + f).attr("href", "javascript:skill_parent_plus(" + f + ");");
    $("#PLUS_LINK_" + f).attr("href", "javascript:skill_parent_plus(" + f + ");");
    $("#MINUS_LINK_" + f).attr("href", "javascript:;");
    $("#ALL_LINK_" + f).attr("href", "javascript:;")
}
function skill_close(e) {
    var d = "off";
    var b = "off";
    var c = get_skilldata(e);
    if (c != null) {
        $("#ICON_IMAGE_" + e).attr("src", g_var.img_icon + c.closeicon)
    }
    $("#INFO_DIV_" + e).removeClass().addClass(g_var.cls_info + b);
    $("#PLUS_IMAGE_" + e).attr("src", g_var.btn_plus + d + g_var.img_ext);
    $("#MINUS_IMAGE_" + e).attr("src", g_var.btn_minus + d + g_var.img_ext);
    $("#ALL_IMAGE_" + e).attr("src", g_var.btn_all + d + g_var.img_ext);
    $("#SKSIM_TMPL_TOP_" + e).removeClass().addClass(g_var.cls_box + b + "_top");
    $("#SKSIM_TMPL_BOTTOM_" + e).removeClass().addClass(g_var.cls_box + b + "_bottom");
    $("#SKSIM_TMPL_MAIN_" + e).removeClass().addClass(g_var.cls_box + b);
    $("#PLUS_LINK2_" + e).attr("href", "javascript:;");
    $("#PLUS_LINK_" + e).attr("href", "javascript:;");
    $("#MINUS_LINK_" + e).attr("href", "javascript:;");
    $("#ALL_LINK_" + e).attr("href", "javascript:;")
}
function skill_plus(c) {
    var b = sp_limit(c);
    if (b) {
        skill_plus_action(c, true)
    }
}
function skill_max(c) {
    var b = sp_limit(c);
    while (b) {
        if (skill_plus_action(c, false) == false) {
            break
        }
    }
}
function skill_plus_action(c, q) {
    var F = $("#S_" + c).attr("name").split("_");
    var y = parseInt(F[1]);
    var x = parseInt(F[2]);
    var h = s[y].skill[x];
    var u = parseInt($("#INFO_CURRENT_" + c).html());
    var z = parseInt($("#INFO_MAX_" + c).html());
    if (u + 1 > z) {
        if (q) {
            alert(str1)
        }
        return false
    }
    var b = s[y].skill[x].skill_info;
    var d = -1;
    var e = -1;
    for (idx = 0; idx < b.length; idx++) {
        if (parseInt(b[idx].sklv) == u + 1) {
            d = parseInt(b[idx].sp);
            e = parseInt(b[idx].chlv);
            break
        }
    }
    var E = job_limit(y, g_chlv);
    var B = parseInt($("#" + s[y].type + "_spent_sp").text()) + d;
    if (E < B) {
        if (q) {
            var v = $("#" + s[y].type + "_name").text();
            alert(str4)
        }
        return false
    }
    if (d < 0 || e < 0) {
        return false
    }
    if (e > g_chlv) {
        if (q) {
            alert(str2 + e + str3)
        }
        return false


    }
    
    var n = parseInt($("#remain_sp").html());
    if (d > n) {
        if (q) {
            alert(str6 + d)
        }
        return false
    }
	
	if (h.conflict) {
        for (var r = 0; r < h.conflict.length; r++) {
            var m = parseInt(h.conflict[r].tlv);
            var f = parseInt($("#INFO_CURRENT_" + h.conflict[r].id).html());
            if (f <= m) {
                g_var.conflict_root = null
            } else {
                g_var.conflict_root = h.conflict[r].id
            }
            skill_open(h.conflict[r].id)
        }
    }
    u++;
    $("#INFO_CURRENT_" + c).text(u);
    on_skill_plus(s[y].type, d);
    if (h.child) {
        for (var A = 0; A < h.child.length; A++) {
            if (u >= parseInt(h.child[A].lv)) {
                var p = get_skilldata(h.child[A].id);
                if (p == null) {
                    continue
                }
                for (var D = 0; D < s.length; D++) {
                    if (h.child[A].s_id == s[D].c_id) {
                        if (is_openable(p)) {
                            if (p.conflict) {
                                for (var C = 0; C < p.conflict.length; C++) {
                                    var o = parseInt(p.conflict[C].tlv);
                                    var g = parseInt($("#INFO_CURRENT_" + p.conflict[C].id).html());
                                    if ($("#INFO_CURRENT_" + p.conflict[C].id).html() != null) {
                                        if (g > o) {
                                            skill_close(h.child[A].id);
                                            return true
                                        } else {
                                            skill_open(h.child[A].id)
                                        }
                                    }
                                }
                            } else {
                                skill_open(h.child[A].id)
                            }
                        }
                    }
                }
            }
        }
    }
	////////////////////////////////////
	// EXCLUSIVE
	if(h.exclusive) {
		skill_close(h.exclusive[0].id);	
	}
	////////////////////////////////////
    return true
}
function is_openable(b) {
    if (b.parent) {
        for (var d = 0; d < b.parent.length; d++) {
            var f = parseInt($("#INFO_CURRENT_" + b.parent[d].id).html());
            var c = parseInt(b.parent[d].lv);
            if (f >= c) {
                var e = true
            } else {
                var e = false;
                return e
            }
        }
    } else {
        var e = true
    }
    return e
}
function skill_minus(b) {
    skill_minus_action(b, true)
}
function skill_minus_action(e, q) {
    var z = $("#S_" + e).attr("name").split("_");
    var x = parseInt(z[1]);
    var v = parseInt(z[2]);
    var n = s[x].skill[v];
    var m = document.getElementById("skill_point_" + e);
    var b = document.getElementById("skill_max_" + e);
    var u = parseInt($("#INFO_CURRENT_" + e).html());
    var y = parseInt($("#INFO_MAX_" + e).html());
    if (u < 1) {
        if (q) {
            alert(str7)
        }
        return false
    }
    if (u <= parseInt(n.defaultpt)) {
        if (q) {
            alert(str7)
        }
        return false
    }
    var d = new Array();
    if (n.child) {
        for (c_idx = 0; c_idx < n.child.length; c_idx++) {
            var g = parseInt($("#INFO_CURRENT_" + n.child[c_idx].id).html());
            if (u - 1 < parseInt(n.child[c_idx].lv)) {
                if (g > 0) {
                    if (q) {
                        alert(str8)
                    }
                    return
                } else {
                    for (a = 0; a < s.length; a++) {
                        if (n.child[c_idx].s_id == s[a].c_id) {
                            d.push(n.child[c_idx].id)
                        }
                    }
                }
            }
        }
    }
    if (n.conflict) {
        for (var r = 0; r < n.conflict.length; r++) {
            var o = parseInt(n.conflict[r].tlv);
            var f = parseInt($("#INFO_CURRENT_" + n.conflict[r].id).html());
            if (g_var.conflict_root != null && g_var.conflict_root == e) {
                if ($("#INFO_CURRENT_" + n.conflict[r].id).html() != null) {
                    if (f > o) {
                        alert(str9);
                        return
                    } else {
                        g_var.conflict_root = null
                    }
                }
                skill_plus_open(n.conflict[r].id)
            }
        }
    }
    var c = n.skill_info;
    var p = -1;
    for (idx = 0; idx < c.length; idx++) {
        if (parseInt(c[idx].sklv) == u) {
            p = parseInt(c[idx].sp);
            break
        }
    }
    if (p < 0) {
        return
    }

    u--;
    $("#INFO_CURRENT_" + e).html(u);
    on_skill_minus(s[x].type, p);
    for (idx = 0; idx < d.length; idx++) {
        var h = get_skilldata(d[idx]);
        if (h.parent != null) {
            if (h.conflict) {
                for (var r = 0; r < h.conflict.length; r++) {
                    var o = parseInt(h.conflict[r].tlv);
                    var f = parseInt($("#INFO_CURRENT_" + h.conflict[r].id).html());
                    if (f > o) {
                        skill_close(d[idx]);
                        return false
                    } else {
                        skill_plus_open(d[idx])
                    }
                }
            } else {
                skill_plus_open(d[idx])
            }
        } else {
            skill_close(d[idx])
        }
    }
	
	///////////////////////////////
	// EXCLUSIVE
	// Assume exclusive skill's max point is 1.
	if(n.exclusive) {
		skill_open(n.exclusive[0].id);
	}
	///////////////////////////////
	
    return true
}
function open_tooltip(b, c) {
    var g = 0;
    var d = 0;
    var f = b.split("_")[2];
    if (!c) {
        g = event.clientX;
        d = event.clientY
    } else {
        g = c.clientX;
        d = c.clientY
    }
    on_open_tooltip(f, g, d)
}
function open_tooltip_new(f, d, c, b, g) {
    var m = 0;
    var h = 0;
    var j = f.split("_")[2];
    if (!g) {
        m = event.clientX;
        h = event.clientY
    } else {
        m = g.clientX;
        h = g.clientY
    }
    on_open_tooltip_new(j, d, c, b, m, h)
}
function close_tooltip(b) {
    var c = b.split("_")[2];
    on_close_tooltip(c)
}
function skill_reset_tab() {
    var h;
    if (g_current_tab == 1) {
        h = "JOB";
        $("#jobSPoint").text(0);
        $("#jobTPoint").text(parseInt(g_chlv) * 1);
        $("#jobRPoint").text(parseInt(g_chlv) * 1);
        $("#sPoint").text(parseInt($("#jobSPoint").text()));
        $("#tPoint").text(parseInt($("#jobTPoint").text()));
        $("#rPoint").text(parseInt($("#jobRPoint").text()))
    } else {
        if (g_current_tab == 2) {
            h = "ADVENTURE";
            $("#advSPoint").text(0);
            $("#advTPoint").text($("#advLev").val());
            $("#advRPoint").text($("#advLev").val());
            $("#sPoint").text(parseInt($("#advSPoint").text()));
            $("#tPoint").text(parseInt($("#advTPoint").text()));
            $("#rPoint").text(parseInt($("#advRPoint").text()))
        } else {
            if (g_current_tab == 3) {
                h = "NATIONAL";
                $("#natSPoint").text(0);
                $("#natTPoint").text(Math.floor(parseInt(g_chlv) / 5));
                $("#natRPoint").text(Math.floor(parseInt(g_chlv) / 5));
                $("#sPoint").text(parseInt($("#natSPoint").text()));
                $("#tPoint").text(parseInt($("#natTPoint").text()));
                $("#rPoint").text(parseInt($("#natRPoint").text()))
            }
        }
    }
    var b = -1;
    for (var e = 0; e < s.length; e++) {
        if (s[e].type == h) {
            b = e;
            break
        }
    }
    if (b < 0) {
        return
    }
    skill = s[b].skill;
    for (var e = 0; e < skill.length; e++) {
        var g = "on";
        if (g_chlv < parseInt(skill[e].lvlimit) || skill[e].parent != null) {
            g = "off"
        }
        var d = document.getElementById("S_" + skill[e].id);
        var f = d.getElementsByTagName("a");
        for (var c = 0; c < f.length; c++) {
            if (g == "off") {
                f[c].href = "javascript:;"
            }
        }
        d.className = "simul_box_" + g;
        d.lastChild.className = "simul_box_info_" + g;
        if (g == "off") {
            skill_close(skill[e].id)
        }
        document.getElementById("skill_point_" + skill[e].id).innerHTML = skill[e].defaultpt
    }
}
function get_input_json() {
    for (var c = 0; c < s.length; c++) {
        for (var b = 0; b < s[c].skill.length; b++) {
            var d = $("#S_" + s[c].skill[b].id).attr("class");
            if (d == "simul_box_on") {
                on_flag = "on"
            } else {
                on_flag = "off"
            }
            s[c].skill[b].on_flag = on_flag;
            s[c].skill[b].currentpt = $("#INFO_CURRENT_" + s[c].skill[b].id).text()
        }
        on_input_data(s[c])
    }
    return s
}
function get_input_data() {
    for (var d = 0; d < s.length; d++) {
        for (var c = 0; c < s[d].skill.length; c++) {
            var e = $("#S_" + s[d].skill[c].id).attr("class");
            if (e == "simul_box_on") {
                on_flag = "on"
            } else {
                on_flag = "off"
            }
            s[d].skill[c].on_flag = on_flag;
            s[d].skill[c].currentpt = $("#INFO_CURRENT_" + s[d].skill[c].id).text()
        }
        on_input_data(s[d])
    }
    var b = JSON.stringify(s);
    return b
}
/*function fy_layershow(d) {
    var c = $("#skill_point_" + d).text();
    var b = "tooltip_" + d + "_" + c;
    $("#skill_info_layer").html('<div><img src="../../../file.thisisgame.com/webdata/argo/simulator/tooltip/' + b + '.jpg"></div>');
    offsetx = parseInt(event.clientX);
    offsety = parseInt(event.clientY);
    l = offsetx + document.documentElement.scrollLeft + 20;
    t = offsety + document.documentElement.scrollTop - 20;
    document.getElementById("skill_info_layer").style.visibility = "visible";
    $("#skill_info_layer").css({
        top: t,
        left: l,
        position: "absolute"
    }).show()
}*/
function fy_layerhide() {
    $("#skill_info_layer").hide();
    $("#skill_info_layer").html("")
}
function sksim_submit(b) {
    $("#sksim_content").val(get_input_data());
    $("#sksim_chlv").val(g_chlv);
    return on_submit(b)
}

function get_position_x(c, b) {
    var d = 30;
    var e = 95;
    return d + (e * (b - 1))
}
function get_position_y(b, e) {
    var c = 0;
    var d = 0;
    c = 30;
    d = 100;
    return c + (d * (e - 1))
}
function switch_tab(c) {
    var e = $("#" + c + "_tabbox").attr("src");
    $("#" + c + "_div").show();
    for (var b = 0; b < s.length; b++) {
        if (s[b].type == "GENERAL_NORMAL") {
            continue
        }
        var d = "on";
        if (s[b].type != c) {
            d = "off";
            $("#" + s[b].type + "_div").hide()
        }
        $("#" + s[b].type + "_tabbox").attr("src", "image/tab/simul_tab_" + s[b].type + "_" + d + ".gif")
    }
}
function reset_skill_tree_by_bottom() {
    $("#chlv").val($("#chlv_bottom").val());
    reset_skill_tree(false)
}
function on_skill_plus(d, f) {
    var c = parseInt($("#remain_sp").html());
    var e = parseInt($("#used_sp").html());
    e += f;
    c -= f;
    $("#used_sp").html(e);
    $("#remain_sp").text(c);
    $("#used_sp_bottom").html(e);
    $("#remain_sp_bottom").text(c);
    var b = parseInt($("#" + d + "_spent_sp").text());
    b += f;
    $("#" + d + "_spent_sp").text(b)
}
function on_skill_minus(d, f) {
    var e = parseInt($("#used_sp").html());
    var c = parseInt($("#remain_sp").html());
    e -= f;
    c += f;
    $("#used_sp").html(e);
    $("#remain_sp").html(c);
    $("#used_sp_bottom").html(e);
    $("#remain_sp_bottom").text(c);
    var b = parseInt($("#" + d + "_spent_sp").text());
    b -= f;
    $("#" + d + "_spent_sp").text(b)
}
function on_reset_skill_tree() {
    for (var b = 0; b < s.length; b++) {
        $("#" + s[b].type + "_spent_sp").text(0)
    }
    var c = get_sp_by_level(g_chlv);
    $("#total_sp").text(c);
    $("#used_sp").html("0");
    $("#remain_sp").html($("#total_sp").html());
    $("#total_sp_bottom").text(c);
    $("#used_sp_bottom").html("0");
    $("#remain_sp_bottom").html($("#total_sp").html());
    on_reset_class_limit()
}
function on_reset_class_limit() {
    var n = g_var.sim_level,
    p = g_var.sim_icon,
    c = g_var.sim_name;
    g_chlv = parseInt($("#chlv").val());
    var m = g_var.ass_folder;
  console.log($("#chlv"));
    var h = get_sp_level_limit(g_chlv);
    var j = get_sp_level_limit2(g_chlv);
    var g = get_sp_level_limit3(g_chlv);


    $("#class1_limit").text(h);
    $("#class2_limit").text(j);
    $("#class3_limit").text(g);
}
function activate_class_button(d, c, b) {
    var g = $("#" + d + "_TITLE").attr("src");
    var f = $("#" + d + "_" + c + "_TITLE").attr("src");
    var e = $("#" + d + "_" + c + "_" + b + "_BUTTON").attr("src");
    $("#" + d + "_TITLE").attr("src", g.replace("_off", "_on"));
    $("#" + d + "_" + c + "_TITLE").attr("src", f.replace("_off", "_on"));
    $("#" + d + "_" + c + "_" + b + "_BUTTON").attr("src", e.replace("_off", "_on"))
}
function on_skill_draw_tree(f) {
    if ($("#" + class1 + "_AREA").length > 0) {
        activate_class_button(class1, class2, class3)
    }
    $("#total_sp").text(get_sp_by_level(g_chlv));
    $("#total_sp_bottom").text(get_sp_by_level(g_chlv));
    var e = parseInt($("#used_sp").html());
    var b = parseInt($("#remain_sp").html());
    for (var d = 0; d < s.length; d++) {
        if (s[d].spent_sp == undefined) {
            continue
        }
        var c = parseInt(s[d].spent_sp);
        e += c;
        b -= c;
        $("#" + s[d].type + "_spent_sp").text(c)
    }
    $("#used_sp").html(e);
    $("#used_sp_bottom").html(e);
    $("#remain_sp").html(b);
    $("#remain_sp_bottom").html(b)
}
function get_sp_by_level(c) {
    var b = 3;
    b = b * (parseInt(c) - 1);
    if (c >= 51) {
        b = b - parseInt(c) + 50
    }
    return b
}
function get_sp_by_level(level)
{
	var sp_list = new Array(0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227);
	return sp_list[parseInt(level)];
}

function get_sp_level_limit(level)
{
	var sp_list = new Array(0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 26, 28, 30, 31, 33, 35, 37, 39, 41, 43, 45, 46, 48, 50, 52, 54, 56, 58, 60, 61, 63, 65, 67, 69, 71, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 91, 93, 94, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 108, 109, 110, 111, 113, 114, 115, 116, 118, 119, 120, 121, 123, 124, 125, 126, 128, 129, 130, 131, 133, 134, 135, 136, 138, 139, 140, 141);

	return sp_list[parseInt(level)];
}

function get_sp_level_limit2(level)
{
	var sp_list = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 29, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 97, 98, 99, 101, 102, 103, 105, 106, 107, 109, 110, 111, 112, 114, 115, 116, 118, 119, 120, 121, 123, 124, 125, 127, 128, 129, 130, 132, 133, 134, 136, 137, 138, 139, 141, 142, 143, 145, 146);

	return sp_list[parseInt(level)];
}

function get_sp_level_limit3(level)
{
	var sp_list = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 82, 84, 86, 88, 90, 91, 93, 94, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 108, 109, 110, 111, 113, 114, 115, 116, 118, 119, 120, 121, 123, 124, 125, 126, 128, 129, 130, 131, 133, 134, 135, 136, 138, 139, 140, 141);

	return sp_list[parseInt(level)];
}
function on_input_data(b) {
    b.spent_sp = $("#" + b.type + "_spent_sp").text()
}
var g_on_submitting = 0;
function SIM_AddSkill(c) {
    if (!window.SIM_Skill) {
        window.SIM_Skill = {}
    }
    var b = window.SIM_Skill;
    for (var d in c) {
        b[d] = c[d]
    }
} (function() {
    var u = g_var.sim_level,
    h = g_var.sim_icon,
    p = g_var.sim_name;
    var y = {},
    f = /\{n\}/g,
    b = /\{t\d+\}/g,
    o = /\{next\|([^\}]+)\}/g,
    d = /\{s\}/g;
    var n = g_var.ass_folder;
    function q(D, E, B, A) {
        var C = "";
        if (D == null) {
            return C
        }
        E = parseInt(E, 10) || 0;
        D = D.replace(f, E);
        D = D.replace(d, A);
        D = D.replace(b,
        function(G) {
            var F = B.t[G];
            if (E > F.length - 1 || F[E] == null) {
                C = null;
                return ""
            } else {
                return F[E]
            }
        });
        if (C === null) {
            return null
        }
        D = D.replace(o,
        function(F, H) {
            if (B.d2 && B.d2[H]) {
                var G = q(B.d2[H], E + 1, B, A);
                if (G === null) {
                    C = null;
                    return ""
                } else {
                    return G
                }
            } else {
                return ""
            }
        });
        return C === null ? null: D
    }
	/*
    function e(E, C) {
        var G = E + "|" + C,
        F = y[G];
        if (F != null) {
            return F
        }
        var K = sp_limit_value(E);
        var H = SIM_Skill[E];
        if (!H) {
            return y[G] = ""
        }
        var I = [],
        J;
        I.push('<div class="skill_layer_area" id="TOOLTIP_' + E + "_" + C + '" style="display:none"><div class="skill_layer_top"><table cellpadding="0" cellspacing="0" border="0">');
        I.push("<tr><th>" + H.name + '</th></tr></table></div><div class="skill_layer"><table cellpadding="0" cellspacing="0" border="0">');
        I.push('<tr><td class="info_pad">');
        var B = H.d1;
        for (var D in B) {
            J = q(B[D], C, H, K);
            if (J !== null) {
                I.push('<span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span> : ");
                I.push(J + "<br/>")
            }
        }
        I.push("</td></tr>");
        I = [I.join("")];
        var A = H.d2;
        for (D in A) {
            J = q(A[D], C, H, K);
            if (J !== null) {
                I.push('<tr><td class="info_pad"><span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span><br/>" + J + "</td></tr>")
            }
        }
        F = I.join('<tr><td class="skill_line"></td></tr>') + '</table></div><div class="skill_layer_bottom"></div></div>';
        return y[G] = F
    }
	*/
	function e(E, C) {
        var G = E + "|" + C,
        F = y[G];
        if (F != null) {
            return F
        }
        var K = sp_limit_value(E);
        var H = SIM_Skill[E];
        if (!H) {
            return y[G] = ""
        }
		// H is skill
		if (!("changeskill" in H) || !(H["changeskill"] in SIM_Skill)) { 
        	var I = [],
        	J;
        	I.push('<div class="skill_layer_area" id="TOOLTIP_' + E + "_" + C + '" style="display:none"><div class="skill_layer_top"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push("<tr><th>" + H.name + '</th></tr></table></div><div class="skill_layer"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push('<tr><td class="info_pad">');
        	var B = H.d1;
        	for (var D in B) {
            	J = q(B[D], C, H, K);
            	if (J !== null) {
                	I.push('<span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span> : ");
                	I.push(J + "<br/>")
            	}
        	}
        	I.push("</td></tr>");
        	I = [I.join("")];
        	var A = H.d2;
        	for (D in A) {
            	J = q(A[D], C, H, K);
            	if (J !== null) {
                	I.push('<tr><td class="info_pad"><span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span><br/>" + J + "</td></tr>")
            	}
        	}
        	F = I.join('<tr><td class="skill_line"></td></tr>') + '</table></div><div class="skill_layer_bottom"></div></div>';
        	return y[G] = F
		} else {
			var I = [],
        	J;
        	I.push('<div class="skill_layer_area" id="TOOLTIP_' + E + "_" + C + '" style="display:none;width:580px"><div style="vertical-align: top;display: inline-block;"><div class="skill_layer_top"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push("<tr><th>" + H.name + '</th></tr></table></div><div class="skill_layer"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push('<tr><td class="info_pad">');
        	var B = H.d1;
        	for (var D in B) {
            	J = q(B[D], C, H, K);
            	if (J !== null) {
                	I.push('<span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span> : ");
                	I.push(J + "<br/>")
            	}
        	}
        	I.push("</td></tr>");
        	I = [I.join("")];
        	var A = H.d2;
        	for (D in A) {
            	J = q(A[D], C, H, K);
            	if (J !== null) {
                	I.push('<tr><td class="info_pad"><span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span><br/>" + J + "</td></tr>")
            	}
        	}
        	F = I.join('<tr><td class="skill_line"></td></tr>')
			
			F += '</table></div><div class="skill_layer_bottom"></div></div>';
			//////////////////////////////////////////////////////////////////////////
			
			H = SIM_Skill[H["changeskill"]];
			var I = [],
        	J;
        	I.push('<div style="vertical-align: top; display: inline-block;"><div class="skill_layer_top"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push("<tr><th>" + H.name + '</th></tr></table></div><div class="skill_layer"><table cellpadding="0" cellspacing="0" border="0">');
        	I.push('<tr><td class="info_pad">');
        	var B = H.d1;
        	for (var D in B) {
            	J = q(B[D], C, H, K);
            	if (J !== null) {
                	I.push('<span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span> : ");
                	I.push(J + "<br/>")
            	}
        	}
        	I.push("</td></tr>");
        	I = [I.join("")];
        	var A = H.d2;
        	for (D in A) {
            	J = q(A[D], C, H, K);
            	if (J !== null) {
                	I.push('<tr><td class="info_pad"><span class="layer_text_orange">' + (SIM_LableHash[D] || D) + "</span><br/>" + J + "</td></tr>")
            	}
        	}
        	F += I.join('<tr><td class="skill_line"></td></tr>')
			
			
			//////////////////////////////////////////////////////////////////////////
			
			F += '</table></div><div class="skill_layer_bottom"></div></div></div>';
        	return y[G] = F
		}
    }
    window.SIM_GetValueText = q;
    window.SIM_GetTipHtml = e;
})();
var current_tooltip = "";
try {
    if (parent != window) {
        document.documentElement.style.overflow = "hidden"

    }
} catch(ex) {}
function on_open_tooltip(f, b, e) {
    var d = $("#INFO_CURRENT_" + f).text();
    current_tooltip = f + "_" + d;
    if ($("#TOOLTIP_" + f + "_" + d).length <= 0) {
        var c = SIM_GetTipHtml(f, d);
        if (c) {
            $("#tooltip_area").append(c);
            setTimeout("open_tooltip_action(" + f + ", " + d + ", " + b + ", " + e + ")", 500)
        }
    } else {
        setTimeout("open_tooltip_action(" + f + ", " + d + ", " + b + ", " + e + ")", 500)
    }
}
function open_tooltip_action(m, b, o, n) {
    if ($("#TOOLTIP_" + m + "_" + b).length <= 0) {
        return
    }
    if (current_tooltip != m + "_" + b) {
        return
    }
    var f = o + (document.documentElement.scrollLeft || document.body.scrollLeft),
    e = n + (document.documentElement.scrollTop || document.body.scrollTop),
    q = document.documentElement.scrollWidth,
    d = document.documentElement.scrollHeight,
    c = $("#TOOLTIP_" + m + "_" + b),
    p = c.width(),
    g = c.height(),
    r = f > q / 2 ? f - p - 10 : f + 10,
    j = e > d / 2 ? e - g - 10 : e + 10;
	
	if (p == 580) {
		if(r < f)
			r += 100;
		else
			r-= 100;
	}
	
    $("#TOOLTIP_" + m + "_" + b).css({
        position: "absolute",
        top: j,
        left: r
    }).show()

}
function on_close_tooltip(b) {
    current_tooltip = "";
    $(".skill_layer_area").hide()
}
function on_set_sksim_bg(b) {
    document.getElementById(b.type + "_div").style.background = "url(image/bg/" + b.type + ".jpg) no-repeat";
    var c = $("#" + b.type + "_tabbox").attr("src");
    var e = c.split("_");
    var f = "off";
    for (var d = 0; d < e.length; d++) {
        if (e[d] == "on.gif") {
            f = "on"
        }
    }
    $("#" + b.type + "_tabbox").attr("src", "image/tab/simul_tab_" + b.type + "_" + f + ".gif")
}
function job_limit(b, d) {
    if (b == 0) {
        var c = get_sp_level_limit(d)
    } else {
        if (b == 1) {
            var c = get_sp_level_limit2(d)
        } else {
            var c = get_sp_level_limit3(d)
        }
    }
    return c
}
function sp_limit_value(c) {
    var b = get_skilldata(c);
    if (typeof(b.skill_limit) != "undefined") {
        return b.skill_limit
    } else {
        return null
    }
}
function sp_limit(m) {
    var b = $("#S_" + m).attr("name");
    if (b == null) {
        return null
    }
    var g = b.split("_")[1];
    if (g == 0) {
        return true
    }
    var f = g - 1;
    var h = get_skilldata(m);
    var n = "#" + s[f].type + "_spent_sp";
    var e = "#" + s[f].type + "_name";
    if (typeof(h.skill_limit) != "undefined" && h.skill_limit != 0) {
        var d = $(n).html();
        var o = sp_limit_value(m);
        if (parseInt(d) >= parseInt(o)) {
            return true
        } else {
            var c = $(e).html();
            alert(str11 + c + str11_sub + o + str11_sub1);
            return false
        }
    } else {
        return true
    }
}
function skill_parent_plus(e) {
    var c = sp_limit(e);
    if (c) {
        if (confirm(str12) == true) {
            var d = Array("1");
            var b = Array();
            skill_preorder(e, b, d);
            skill_parent_order(b, d)
        }
    }
}
function skill_preorder(f, d, e) {
    var c = get_skilldata(f);
    d.push(f);
    if (c.parent) {
        for (var b = 0; b < c.parent.length; b++) {
            e.push(c.parent[b].lv);
            skill_preorder(c.parent[b].id, d, e)
        }
    }
}
function skill_parent_order(p, u) {
    var d = u.length;
    var f = 0;
    for (var E = 0; E < d; E++) {
        f += parseInt(u[E])
    }
    var q = parseInt($("#remain_sp").html());
    if (q < f) {
        alert(str13);
        return false
    }
    var m = 0;
    var e = 0;
    var g = 0;
    for (var A = 0; A < p.length; A++) {
        var B = $("#S_" + p[A]).attr("name");
        var h = B.split("_")[1];
        var r = 0;
        var o = get_skilldata(p[A]);
        for (var y = 0; y < o.skill_info.length; y++) {
            if (parseInt(o.skill_info[y].sklv) <= parseInt($("#INFO_CURRENT_" + p[A]).html())) {
                continue
            }
            if (parseInt(o.skill_info[y].sklv) > parseInt(u[A])) {
                break
            }
            r = r + parseInt(o.skill_info[y].sp)
        }
        if (h == 0) {
            m = m + r
        } else {
            if (h == 1) {
                e = e + r
            } else {
                g = g + r
            }
        }
    }
    var E = parseInt($("#" + s[0].type + "_spent_sp").html()) + m;
    var D = parseInt($("#" + s[1].type + "_spent_sp").html()) + e;
    if (s[2]) {
        var C = parseInt($("#" + s[2].type + "_spent_sp").html()) + g
    }
    if (E > get_sp_level_limit(g_chlv)) {
        var v = $("#" + s[0].type + "_name").text();
        alert(str14);
        return
    }
    if (D > get_sp_level_limit2(g_chlv)) {
        var G = $("#" + s[1].type + "_name").text();
        alert(str14);
        return
    }
    if (s[2] && C > get_sp_level_limit3(g_chlv)) {
        var F = $("#" + s[2].type + "_name").text();
        alert(str14);
        return
    }
    for (var D = d - 1; D >= 0; D--) {
        var z = parseInt($("#INFO_CURRENT_" + p[D]).html());
        var x = u[D] - z;
        for (var C = 0; C < x; C++) {
            skill_plus_action(p[D], false)
        }
    }
} (function() {
    var c, p = /\w+\.html?/i;
    try {
        var q = top.location.search;
        if (q) {
            q = q.substr(1);
            var b = q.split("&"),
            o = {};
            for (var f = 0; f < b.length; f++) {
                var e = b[f].split("=");
                o[e[0]] = e[1]
            }
            c = o.ifr
        }
    } catch(m) {}
    if (c) {
        c = decodeURIComponent(c);
        var h = window.location.href,
        n;
        var g = window.location.href.match(p);
        if (g) {
            n = g[0]
        }
        if (n && n != c) {
            window.location.href = h.replace(p, c);
            return
        }
    }
    SmallHash = {
        encode: function(v, D, B) {
            var u = 0;
            for (var A = 0, z = D.length; A < z; A = A + 1) {
                u += Math.ceil(Math.log(D[A]) / Math.LN2)
            }
            var r = j.int2bigInt(0, u);
            for (var x = D.length - 1, y = 0; x >= 0; x = x - 1, y = y + 1) {
                var C = Math.min(Math.abs(Math.floor(v[x])), D[x] - 1);
                j.mult_(r, j.int2bigInt(D[x], 32));
                j.add_(r, j.int2bigInt(C, 32))
            }
            return j.bigInt2str(r, B.length, B)
        },
        decode: function(z, A, x) {
            z = j.str2bigInt(z, x.length, x);
            var y = j.dup(z);
            var r = [];
            for (var v = 0, u = A.length; v < u; v = v + 1) {
                j.divide_(z, j.int2bigInt(A[v], 32), z, y);
                r[v] = Number(j.bigInt2str(y, 10, "0123456789"))
            }
            return r
        }
    };
    var j = function() {
        var T = function(v) {
            var r, y, x, u;
            y = new Array(v);
            for (r = 0; r < v; r++) {
                y[r] = 0
            }
            y[0] = 2;
            x = 0;
            for (; y[x] < v;) {
                for (r = y[x] * y[x]; r < v; r += y[x]) {
                    y[r] = 1
                }
                x++;
                y[x] = y[x - 1] + 1;
                for (; y[x] < v && y[y[x]]; y[x]++) {}
            }
            u = new Array(x);
            for (r = 0; r < x; r++) {
                u[r] = y[r]
            }
            return u
        };
        var cz = function(r, v) {
            var x, y, z, u;
            if (cu.length != r.length) {
                cu = bI(r);
                bQ = bI(r);
                bA = bI(r)
            }
            bW(bA, v);
            bX(bQ, r);
            bX(cu, r);
            b1(bQ, -1);
            b1(cu, -1);
            z = 0;
            for (x = 0; x < bQ.length; x++) {
                for (y = 1; y < b0; y <<= 1) {
                    if (r[x] & y) {
                        u = (z < bQ.length + a7 ? z: 0);
                        x = bQ.length;
                        y = b0
                    } else {
                        z++
                    }
                }
            }
            if (u) {
                bL(bQ, u)
            }
            cs(bA, bQ, r);
            if (!a6(bA, 1) && !bB(bA, cu)) {
                y = 1;
                while (y <= u - 1 && !bB(bA, cu)) {
                    cB(bA, r);
                    if (a6(bA, 1)) {
                        return 0
                    }
                    y++
                }
                if (!bB(bA, cu)) {
                    return 0
                }
            }
            return 1
        };
        var bU = function(u) {
            var x, v, r;
            for (x = u.length - 1;
            (u[x] == 0) && (x > 0); x--) {}
            for (v = 0, r = u[x]; r;
            (r >>= 1), v++) {}
            v += a7 * x;
            return v
        };
        var bK = function(u, v) {
            var r = cm(0, (u.length > v ? u.length: v) * a7, 0);
            bX(r, u);
            return r
        };
        var b8 = function(r) {
            var u = cm(0, r, 0);
            b3(u, r);
            return cj(u, 1)
        };
        var bp = function(u, v) {
            var r = bI(u);
            bM(r, v);
            return cj(r, 1)
        };
        var bc = function(u, v) {
            var r = bK(u, u.length + 1);
            b1(r, v);
            return cj(r, 1)
        };
        var bo = function(u, v) {
            var r = bK(u, u.length + v.length);
            co(r, v);
            return cj(r, 1)
        };
        var cw = function(u, v, x) {
            var r = bK(u, x.length);
            cs(r, cj(v, 2), cj(x, 2), 0);
            return cj(r, 1)
        };
        var ci = function(u, v) {
            var r = bK(u, (u.length > v.length ? u.length + 1 : v.length + 1));
            cJ(r, v);
            return cj(r, 1)
        };
        var a8 = function(u, v) {
            var r = bK(u, (u.length > v.length ? u.length + 1 : v.length + 1));
            cC(r, v);
            return cj(r, 1)
        };
        var cG = function(u, v) {
            var r = bK(u, v.length);
            var x;
            x = bt(r, v);
            return x ? cj(r, 1) : null
        };
        var b6 = function(u, v, x) {
            var r = bK(u, x.length);
            cr(r, v, x);
            return cj(r, 1)
        };
        var b3 = function(v, C) {
            var x, E, D, u, B, G, r, z, y, F, A;
            if (bE.length == 0) {
                bE = T(30000)
            }
            if (b7.length == 0) {
                b7 = new Array(512);
                for (B = 0; B < 512; B++) {
                    b7[B] = Math.pow(2, B / 511 - 1)
                }
            }
            x = 0.1;
            E = 20;
            recLimit = 20;
            if (cv.length != v.length) {
                cv = bI(v);
                b5 = bI(v);
                cg = bI(v);
                bN = bI(v);
                br = bI(v);
                bF = bI(v);
                bG = bI(v);
                ce = bI(v);
                bw = bI(v);
                bu = bI(v);
                cH = bI(v);
                by = bI(v);
                cc = bI(v);
                cq = bI(v)
            }
            if (C <= recLimit) {
                D = (1 << ((C + 2) >> 1)) - 1;
                bW(v, 0);
                for (u = 1; u;) {
                    u = 0;
                    v[0] = 1 | (1 << (C - 1)) | Math.floor(Math.random() * (1 << C));
                    for (B = 1;
                    (B < bE.length) && ((bE[B] & D) == bE[B]); B++) {
                        if (0 == (v[0] % bE[B])) {
                            u = 1;
                            break
                        }
                    }
                }
                bs(v);
                return
            }
            r = x * C * C;
            if (C > 2 * E) {
                for (G = 1; C - C * G <= E;) {
                    G = b7[Math.floor(Math.random() * 512)]
                }
            } else {
                G = 0.5
            }
            A = Math.floor(G * C) + 1;
            b3(by, A);
            bW(cv, 0);
            cv[Math.floor((C - 2) / a7)] |= (1 << ((C - 2) % a7));
            bn(cv, by, bu, cH);
            y = bU(bu);
            for (;;) {
                for (;;) {
                    cl(b5, y, 0);
                    if (bV(bu, b5)) {
                        break
                    }
                }
                b1(b5, 1);
                cC(b5, bu);
                bX(bw, by);
                co(bw, b5);
                be(bw, 2);
                b1(bw, 1);
                bX(bN, b5);
                be(bN, 2);
                for (z = 0, B = 0;
                (B < bE.length) && (bE[B] < r); B++) {
                    if (cI(bw, bE[B]) == 0) {
                        z = 1;
                        break
                    }
                }
                if (!z) {
                    if (!cz(bw, 2)) {
                        z = 1
                    }
                }
                if (!z) {
                    b1(bw, -3);
                    for (B = bw.length - 1;
                    (bw[B] == 0) && (B > 0); B--) {}
                    for (F = 0, w = bw[B]; w;
                    (w >>= 1), F++) {}
                    F += a7 * B;
                    for (;;) {
                        cl(cc, F, 0);
                        if (bV(bw, cc)) {
                            break
                        }
                    }
                    b1(bw, 3);
                    b1(cc, 2);
                    bX(ce, cc);
                    bX(cg, bw);
                    b1(cg, -1);
                    cs(ce, cg, bw);
                    b1(ce, -1);
                    if (cn(ce)) {
                        bX(ce, cc);
                        cs(ce, bN, bw);
                        b1(ce, -1);
                        bX(cq, bw);
                        bX(br, ce);
                        a0(br, bw);
                        if (a6(br, 1)) {
                            bX(v, cq);
                            return
                        }
                    }
                }
            }
        };
        var cx = function(v, x) {
            var r, u;
            r = Math.floor((v - 1) / a7) + 2;
            u = int2BigInt(0, 0, r);
            cl(u, v, x);
            return u
        };
        var cl = function(u, v, x) {
            var y, r;
            for (y = 0; y < u.length; y++) {
                u[y] = 0
            }
            r = Math.floor((v - 1) / a7) + 1;
            for (y = 0; y < r; y++) {
                u[y] = Math.floor(Math.random() * (1 << (a7 - 1)))
            }
            u[r - 1] &= (2 << ((v - 1) % a7)) - 1;
            if (x == 1) {
                u[r - 1] |= (1 << ((v - 1) % a7))
            }
        };
        var b4 = function(u, v) {
            var r, x;
            r = bI(u);
            x = bI(v);
            a0(r, x);
            return r
        };
        var a0 = function(u, v) {
            var x, y, r, z, A, B, E, C, D;
            if (b2.length != u.length) {
                b2 = bI(u)
            }
            D = 1;
            while (D) {
                D = 0;
                for (x = 1; x < v.length; x++) {
                    if (v[x]) {
                        D = 1;
                        break
                    }
                }
                if (!D) {
                    break
                }
                for (x = u.length; ! u[x] && x >= 0; x--) {}
                y = u[x];
                r = v[x];
                z = 1;
                A = 0;
                B = 0;
                E = 1;
                while ((r + B) && (r + E)) {
                    C = Math.floor((y + z) / (r + B));
                    qp = Math.floor((y + A) / (r + E));
                    if (C != qp) {
                        break
                    }
                    bv = z - C * B;
                    z = B;
                    B = bv;
                    bv = A - C * E;
                    A = E;
                    E = bv;
                    bv = y - C * r;
                    y = r;
                    r = bv
                }
                if (A) {
                    bX(b2, u);
                    bJ(u, v, z, A);
                    bJ(v, b2, E, B)
                } else {
                    bM(u, v);
                    bX(b2, u);
                    bX(u, v);
                    bX(v, b2)
                }
            }
            if (v[0] == 0) {
                return
            }
            bv = cI(u, v[0]);
            bW(u, v[0]);
            v[0] = bv;
            while (v[0]) {
                u[0] %= v[0];
                bv = u[0];
                u[0] = v[0];
                v[0] = bv
            }
        };
        var bt = function(u, v) {
            var r = 1 + 2 * Math.max(u.length, v.length);
            if (! (u[0] & 1) && !(v[0] & 1)) {
                bW(u, 0);
                return 0
            }
            if (bx.length != r) {
                bx = new Array(r);
                bz = new Array(r);
                cE = new Array(r);
                bH = new Array(r);
                bO = new Array(r);
                bP = new Array(r)
            }
            bX(bx, u);
            bX(bz, v);
            bW(cE, 1);
            bW(bH, 0);
            bW(bO, 0);
            bW(bP, 1);
            for (;;) {
                while (! (bx[0] & 1)) {
                    ba(bx);
                    if (! (cE[0] & 1) && !(bH[0] & 1)) {
                        ba(cE);
                        ba(bH)
                    } else {
                        cC(cE, v);
                        ba(cE);
                        cJ(bH, u);
                        ba(bH)
                    }
                }
                while (! (bz[0] & 1)) {
                    ba(bz);
                    if (! (bO[0] & 1) && !(bP[0] & 1)) {
                        ba(bO);
                        ba(bP)
                    } else {
                        cC(bO, v);
                        ba(bO);
                        cJ(bP, u);
                        ba(bP)
                    }
                }
                if (!bV(bz, bx)) {
                    cJ(bx, bz);
                    cJ(cE, bO);
                    cJ(bH, bP)
                } else {
                    cJ(bz, bx);
                    cJ(bO, cE);
                    cJ(bP, bH)
                }
                if (a6(bx, 0)) {
                    if (bb(bO)) {
                        cC(bO, v)
                    }
                    bX(u, bO);
                    if (!a6(bz, 1)) {
                        bW(u, 0);
                        return 0
                    }
                    return 1
                }
            }
        };
        var cp = function(y, u) {
            var x = 1,
            r = 0,
            v;
            for (;;) {
                if (y == 1) {
                    return x
                }
                if (y == 0) {
                    return 0
                }
                r -= x * Math.floor(u / y);
                u %= y;
                if (u == 1) {
                    return r
                }
                if (u == 0) {
                    return 0
                }
                x -= r * Math.floor(y / u);
                y %= u
            }
        };
        var bT = function(u, r) {
            return cp(u, r)
        };
        var a9 = function(r, A, x, z, v) {
            var u = 0;
            var y = Math.max(r.length, A.length);
            if (bx.length != y) {
                bx = new Array(y);
                cE = new Array(y);
                bH = new Array(y);
                bO = new Array(y);
                bP = new Array(y)
            }
            while (! (r[0] & 1) && !(A[0] & 1)) {
                ba(r);
                ba(A);
                u++
            }
            bX(bx, r);
            bX(x, A);
            bW(cE, 1);
            bW(bH, 0);
            bW(bO, 0);
            bW(bP, 1);
            for (;;) {
                while (! (bx[0] & 1)) {
                    ba(bx);
                    if (! (cE[0] & 1) && !(bH[0] & 1)) {
                        ba(cE);
                        ba(bH)
                    } else {
                        cC(cE, A);
                        ba(cE);
                        cJ(bH, r);
                        ba(bH)
                    }
                }
                while (! (x[0] & 1)) {
                    ba(x);
                    if (! (bO[0] & 1) && !(bP[0] & 1)) {
                        ba(bO);
                        ba(bP)
                    } else {
                        cC(bO, A);
                        ba(bO);
                        cJ(bP, r);
                        ba(bP)
                    }
                }
                if (!bV(x, bx)) {
                    cJ(bx, x);
                    cJ(cE, bO);
                    cJ(bH, bP)
                } else {
                    cJ(x, bx);
                    cJ(bO, cE);
                    cJ(bP, bH)
                }
                if (a6(bx, 0)) {
                    if (bb(bO)) {
                        cC(bO, A);
                        cJ(bP, r)
                    }
                    be(bP, -1);
                    bX(z, bO);
                    bX(v, bP);
                    cF(x, u);
                    return
                }
            }
        };
        var bb = function(r) {
            return ((r[r.length - 1] >> (a7 - 1)) & 1)
        };
        var bq = function(u, v, r) {
            var x = u.length,
            y = v.length;
            k = ((x + r) < y) ? (x + r) : y;
            for (f = y - 1 - r; f < x && f >= 0; f++) {
                if (u[f] > 0) {
                    return 1
                }
            }
            for (f = x - 1 + r; f < y; f++) {
                if (v[f] > 0) {
                    return 0
                }
            }
            for (f = k - 1; f >= r; f--) {
                if (u[f - r] > v[f]) {
                    return 1
                } else {
                    if (u[f - r] < v[f]) {
                        return 0
                    }
                }
            }
            return 0
        };
        var bV = function(u, v) {
            var x;
            var r = (u.length < v.length) ? u.length: v.length;
            for (x = u.length; x < v.length; x++) {
                if (v[x]) {
                    return 0
                }
            }
            for (x = v.length; x < u.length; x++) {
                if (u[x]) {
                    return 1
                }
            }
            for (x = r - 1; x >= 0; x--) {
                if (u[x] > v[x]) {
                    return 1
                } else {
                    if (u[x] < v[x]) {
                        return 0
                    }
                }
            }
            return 0
        };
        var bn = function(u, y, r, G) {
            var C, D;
            var E, F, v, z, B, x, A;
            bX(G, u);
            for (D = y.length; y[D - 1] == 0; D--) {}
            A = y[D - 1];
            for (x = 0; A; x++) {
                A >>= 1
            }
            x = a7 - x;
            cF(y, x);

            cF(G, x);
            for (C = G.length; G[C - 1] == 0 && C > D; C--) {}
            bW(r, 0);
            while (!bq(y, G, C - D)) {
                bS(G, y, C - D);
                r[C - D]++
            }
            for (E = C - 1; E >= D; E--) {
                if (G[E] == y[D - 1]) {
                    r[E - D] = b0
                } else {
                    r[E - D] = Math.floor((G[E] * bR + G[E - 1]) / y[D - 1])
                }
                for (;;) {
                    z = (D > 1 ? y[D - 2] : 0) * r[E - D];
                    B = z >> a7;
                    z = z & b0;
                    v = B + r[E - D] * y[D - 1];
                    B = v >> a7;
                    v = v & b0;
                    if (B == G[E] ? v == G[E - 1] ? z > (E > 1 ? G[E - 2] : 0) : v > G[E - 1] : B > G[E]) {
                        r[E - D]--
                    } else {
                        break
                    }
                }
                bY(G, y, -r[E - D], E - D);
                if (bb(G)) {
                    cf(G, y, E - D);
                    r[E - D]--
                }
            }
            bL(y, x);
            bL(G, x)
        };
        var bs = function(r) {
            var x, y, v, u;
            y = r.length;
            v = 0;
            for (x = 0; x < y; x++) {
                v += r[x];
                u = 0;
                if (v < 0) {
                    u = -(v >> a7);
                    v += u * bR
                }
                r[x] = v & b0;
                v = (v >> a7) - u
            }
        };
        var cI = function(u, v) {
            var r, x = 0;
            for (r = u.length - 1; r >= 0; r--) {
                x = (x * bR + u[r]) % v
            }
            return x
        };
        var cm = function(x, v, u) {
            var y, r;
            r = Math.ceil(v / a7) + 1;
            r = u > r ? u: r;
            buff = new Array(r);
            bW(buff, x);
            return buff
        };
        var ch = function(u, D, C, r) {
            var y, z, A, v, x, E;
            var B = u.length;
            if (D == -1) {
                v = new Array(0);
                for (;;) {
                    x = new Array(v.length + 1);
                    for (z = 0; z < v.length; z++) {
                        x[z + 1] = v[z]
                    }
                    x[0] = parseInt(u, 10);
                    v = x;
                    y = u.indexOf(",", 0);
                    if (y < 1) {
                        break
                    }
                    u = u.substring(y + 1);
                    if (u.length == 0) {
                        break
                    }
                }
                if (v.length < r) {
                    x = new Array(r);
                    bX(x, v);
                    return x
                }
                return v
            }
            v = cm(0, D * B, 0);
            for (z = 0; z < B; z++) {
                y = C.indexOf(u.substring(z, z + 1), 0);
                if (D <= 36 && y >= 36) {
                    y -= 26
                }
                if (y < D && y >= 0) {
                    be(v, D);
                    b1(v, y)
                }
            }
            for (B = v.length; B > 0 && !v[B - 1]; B--) {}
            B = r > B + 1 ? r: B + 1;
            x = new Array(B);
            E = B < v.length ? B: v.length;
            for (z = 0; z < E; z++) {
                x[z] = v[z]
            }
            for (; z < B; z++) {
                x[z] = 0
            }
            return x
        };
        var a6 = function(u, v) {
            var r;
            if (u[0] != v) {
                return 0
            }
            for (r = 1; r < u.length; r++) {
                if (u[r]) {
                    return 0
                }
            }
            return 1
        };
        var bB = function(u, v) {
            var x;
            var r = u.length < v.length ? u.length: v.length;
            for (x = 0; x < r; x++) {
                if (u[x] != v[x]) {
                    return 0
                }
            }
            if (u.length > v.length) {
                for (; x < u.length; x++) {
                    if (u[x]) {
                        return 0
                    }
                }
            } else {
                for (; x < v.length; x++) {
                    if (v[x]) {
                        return 0
                    }
                }
            }
            return 1
        };
        var cn = function(u) {
            var r;
            for (r = 0; r < u.length; r++) {
                if (u[r]) {
                    return 0
                }
            }
            return 1
        };
        var cy = function(r, u, z) {
            var x, y, v = "";
            if (bl.length != r.length) {
                bl = bI(r)
            } else {
                bX(bl, r)
            }
            if (u == -1) {
                for (x = r.length - 1; x > 0; x--) {
                    v += r[x] + ","
                }
                v += r[0]
            } else {
                while (!cn(bl)) {
                    y = cd(bl, u);
                    v = z.substring(y, y + 1) + v
                }
            }
            if (v.length == 0) {
                v = "0"
            }
            return v
        };
        var bI = function(u) {
            var r;
            buff = new Array(u.length);
            bX(buff, u);
            return buff
        };
        var bX = function(u, v) {
            var x;
            var r = u.length < v.length ? u.length: v.length;
            for (x = 0; x < r; x++) {
                u[x] = v[x]
            }
            for (x = r; x < u.length; x++) {
                u[x] = 0
            }
        };
        var bW = function(u, v) {
            var r, x;
            for (x = v, r = 0; r < u.length; r++) {
                u[r] = x & b0;
                x >>= a7
            }
        };
        var b1 = function(r, v) {
            var y, z, x, u;
            r[0] += v;
            z = r.length;
            x = 0;
            for (y = 0; y < z; y++) {
                x += r[y];
                u = 0;
                if (x < 0) {
                    u = -(x >> a7);
                    x += u * bR
                }
                r[y] = x & b0;
                x = (x >> a7) - u;
                if (!x) {
                    return
                }
            }
        };
        var bL = function(u, v) {
            var x;
            var r = Math.floor(v / a7);
            if (r) {
                for (x = 0; x < u.length - r; x++) {
                    u[x] = u[x + r]
                }
                for (; x < u.length; x++) {
                    u[x] = 0
                }
                v %= a7
            }
            for (x = 0; x < u.length - 1; x++) {
                u[x] = b0 & ((u[x + 1] << (a7 - v)) | (u[x] >> v))
            }
            u[x] >>= v
        };
        var ba = function(u) {
            var r;
            for (r = 0; r < u.length - 1; r++) {
                u[r] = b0 & ((u[r + 1] << (a7 - 1)) | (u[r] >> 1))
            }
            u[r] = (u[r] >> 1) | (u[r] & (bR >> 1))
        };
        var cF = function(u, v) {
            var x;
            var r = Math.floor(v / a7);
            if (r) {
                for (x = u.length; x >= r; x--) {
                    u[x] = u[x - r]
                }
                for (; x >= 0; x--) {
                    u[x] = 0
                }
                v %= a7
            }
            if (!v) {
                return
            }
            for (x = u.length - 1; x > 0; x--) {
                u[x] = b0 & ((u[x] << v) | (u[x - 1] >> (a7 - v)))
            }
            u[x] = b0 & (u[x] << v)
        };
        var be = function(r, v) {
            var y, z, x, u;
            if (!v) {
                return
            }
            z = r.length;
            x = 0;
            for (y = 0; y < z; y++) {
                x += r[y] * v;
                u = 0;
                if (x < 0) {
                    u = -(x >> a7);
                    x += u * bR
                }
                r[y] = x & b0;
                x = (x >> a7) - u
            }
        };
        var cd = function(u, v) {
            var r, x = 0,
            y;
            for (r = u.length - 1; r >= 0; r--) {
                y = x * bR + u[r];
                u[r] = Math.floor(y / v);
                x = y % v
            }
            return x
        };
        var bJ = function(r, A, z, v) {
            var x, B, y, u;
            y = r.length < A.length ? r.length: A.length;
            u = r.length;
            for (B = 0, x = 0; x < y; x++) {
                B += z * r[x] + v * A[x];
                r[x] = B & b0;
                B >>= a7
            }
            for (x = y; x < u; x++) {
                B += z * r[x];
                r[x] = B & b0;
                B >>= a7
            }
        };
        var bY = function(r, A, v, x) {
            var y, B, z, u;
            z = r.length < x + A.length ? r.length: x + A.length;
            u = r.length;
            for (B = 0, y = x; y < z; y++) {
                B += r[y] + v * A[y - x];
                r[y] = B & b0;
                B >>= a7
            }
            for (y = z; B && y < u; y++) {
                B += r[y];
                r[y] = B & b0;
                B >>= a7
            }
        };
        var cf = function(v, A, y) {
            var z, u, r, x;
            r = v.length < y + A.length ? v.length: y + A.length;
            x = v.length;
            for (u = 0, z = y; z < r; z++) {
                u += v[z] + A[z - y];
                v[z] = u & b0;
                u >>= a7
            }
            for (z = r; u && z < x; z++) {
                u += v[z];
                v[z] = u & b0;
                u >>= a7
            }
        };
        var bS = function(v, A, y) {
            var z, u, r, x;
            r = v.length < y + A.length ? v.length: y + A.length;
            x = v.length;
            for (u = 0, z = y; z < r; z++) {
                u += v[z] - A[z - y];
                v[z] = u & b0;
                u >>= a7
            }
            for (z = r; u && z < x; z++) {
                u += v[z];
                v[z] = u & b0;
                u >>= a7
            }
        };
        var cJ = function(v, u) {
            var z, x, r, y;
            r = v.length < u.length ? v.length: u.length;
            for (x = 0, z = 0; z < r; z++) {
                x += v[z] - u[z];
                v[z] = x & b0;
                x >>= a7
            }
            for (z = r; x && z < v.length; z++) {
                x += v[z];
                v[z] = x & b0;
                x >>= a7
            }
        };
        var cC = function(v, u) {
            var z, x, r, y;
            r = v.length < u.length ? v.length: u.length;
            for (x = 0, z = 0; z < r; z++) {
                x += v[z] + u[z];
                v[z] = x & b0;
                x >>= a7
            }
            for (z = r; x && z < v.length; z++) {
                x += v[z];
                v[z] = x & b0;
                x >>= a7
            }
        };
        var co = function(u, v) {
            var r;
            if (ct.length != 2 * u.length) {
                ct = new Array(2 * u.length)
            }
            bW(ct, 0);
            for (r = 0; r < v.length; r++) {
                if (v[r]) {
                    bY(ct, u, v[r], r)
                }
            }
            bX(u, ct)
        };
        var bM = function(u, r) {
            if (bj.length != u.length) {
                bj = bI(u)
            } else {
                bX(bj, u)
            }
            if (bk.length != u.length) {
                bk = bI(u)
            }
            bn(bj, r, bk, u)
        };
        var cr = function(u, v, x) {
            var r;
            if (bf.length != 2 * u.length) {
                bf = new Array(2 * u.length)
            }
            bW(bf, 0);
            for (r = 0; r < v.length; r++) {
                if (v[r]) {
                    bY(bf, u, v[r], r)
                }
            }
            bM(bf, x);
            bX(u, bf)
        };
        var cB = function(v, C) {
            var A, B, y, x, z, u, r;
            for (z = v.length; z > 0 && !v[z - 1]; z--) {}
            r = z > C.length ? 2 * z: 2 * C.length;
            if (bf.length != r) {
                bf = new Array(r)
            }
            bW(bf, 0);
            for (A = 0; A < z; A++) {
                x = bf[2 * A] + v[A] * v[A];
                bf[2 * A] = x & b0;
                x >>= a7;
                for (B = A + 1; B < z; B++) {
                    x = bf[A + B] + 2 * v[A] * v[B] + x;
                    bf[A + B] = (x & b0);
                    x >>= a7
                }
                bf[A + z] = x
            }
            bM(bf, C);
            bX(v, bf)
        };
        var cj = function(u, r) {
            var x, v;
            for (x = u.length; x > 0 && !u[x - 1]; x--) {}
            v = new Array(x + r);
            bX(v, u);
            return v
        };
        var cs = function(v, A, u) {
            var x, y, r, z;
            if (bm.length != u.length) {
                bm = bI(u)
            }
            if ((u[0] & 1) == 0) {
                bX(bm, v);
                bW(v, 1);
                while (!a6(A, 0)) {
                    if (A[0] & 1) {
                        cr(v, bm, u)
                    }
                    cd(A, 2);
                    cB(bm, u)
                }
                return
            }
            bW(bm, 0);
            for (r = u.length; r > 0 && !u[r - 1]; r--) {}
            z = bR - cp(cI(u, bR), bR);
            bm[r] = 1;
            cr(v, bm, u);
            if (bi.length != v.length) {
                bi = bI(v)
            } else {
                bX(bi, v)
            }
            for (x = A.length - 1; x > 0 & !A[x]; x--) {}
            if (A[x] == 0) {
                bW(v, 1);
                return
            }
            for (y = 1 << (a7 - 1); y && !(A[x] & y); y >>= 1) {}
            for (;;) {
                if (! (y >>= 1)) {
                    x--;
                    if (x < 0) {
                        bZ(v, bd, u, z);
                        return
                    }
                    y = 1 << (a7 - 1)
                }
                bZ(v, v, u, z);
                if (y & A[x]) {
                    bZ(v, bi, u, z)
                }
            }
        };
        var bZ = function(y, A, r, x) {
            var D, E, B, z, v;
            var u = r.length;
            var C = A.length;
            if (ck.length != u) {
                ck = new Array(u)
            }
            for (; u > 0 && r[u - 1] == 0; u--) {}
            bW(ck, 0);
            for (D = 0; D < u; D++) {
                v = ck[0] + y[D] * A[0];
                z = ((v & b0) * x) & b0;
                B = (v + z * r[0]) >> a7;
                v = y[D];
                for (E = 1; E < C; E++) {
                    B += ck[E] + v * A[E] + z * r[E];
                    ck[E - 1] = B & b0;
                    B >>= a7
                }
                for (; E < u; E++) {
                    B += ck[E] + z * r[E];
                    ck[E - 1] = B & b0;
                    B >>= a7
                }
                ck[E - 1] = B & b0
            }
            if (!bV(r, ck)) {
                cJ(ck, r)
            }
            bX(y, ck)
        };
        var a7 = 0;
        var b0 = 0;
        var bR = b0 + 1;
        for (a7 = 0;
        (1 << (a7 + 1)) > (1 << a7); a7++) {}
        a7 >>= 1;
        b0 = (1 << a7) - 1;
        bR = b0 + 1;
        var bd = cm(1, 1, 1);
        var bv = new Array(0);
        var ct = bv;
        var bf = bv;
        var bg = bv;
        var bh = bv;
        var bi = bv;
        var bj = bv;
        var bk = bv;
        var bl = bv;
        var bm = bv;
        var b2 = bv;
        var ck = bv;
        var cu = bv;
        var bQ = bv;
        var bA = bv;
        var bz = bv;
        var bx = bv;
        var cE = bv;
        var bH = bv;
        var bO = bv;
        var bP = bv;
        var b9 = bv;
        var ca = bv;
        var cb = bv;
        var cA = bv;
        var bC = bv;
        var bD = bv;
        var cD = bv;
        var bE = bv;
        var b7 = bv;
        var bu = bv;
        var cv = bv;
        var b5 = bv;
        var cH = bv;
        var by = bv;
        var cg = bv;
        var cc = bv;
        var bN = bv;
        var bw = bv;
        var ce = bv;
        var br = bv;
        var bF = bv;
        var bG = bv;
        var cq = bv;
        return {
            int2bigInt: cm,
            mult_: co,
            add_: cC,
            divide_: bn,
            bigInt2str: cy,
            str2bigInt: ch,
            dup: bI
        }
    } ();
    var d = "f-qR3eOHQ9dSIMwk8pabYt6yrJUFNXLTh4n2KWEoz0uC5j7xmAgDlZiPcs_BGV1v";
    window.getCurSimUrl = function() {
        var C = get_input_json();
        var A = [];
        var x = [];
        for (var v = 0; v < s.length; v++) {
            for (var D in C[v].skill) {
                A.push(parseInt(C[v].skill[D].currentpt));
                x.push(parseInt(C[v].skill[D].maxpt) + 2)
            }
        }
        var u, B;
        try {
            u = top.location.href;
            if (u != window.location.href) {
                var y = window.location.href.match(p);
                if (y && y[0]) {
                    B = y[0]
                }
            }
        } catch(z) {
            u = window.location.href
        }
        if (u.lastIndexOf("?") != -1) {
            u = u.substr(0, u.lastIndexOf("?"))
        }
        var r = $("#curSimUrl").val(u + "?" + SmallHash.encode(A, x, d) + "|" + C[0].spent_sp + "$" + C[1].spent_sp + (C[2] ? "$" + C[2].spent_sp: "") + (B ? "&ifr=" + encodeURIComponent(B) : ""))[0];
        try {
            r.select()
        } catch(z) {}
    };
    window.drawSkills = function() {
        var v;
        try {
            v = top.location.search;
            if (!v) {
                v = window.location.search
            }
        } catch(B) {
            v = window.location.search
        }
        if (v.indexOf("?") == 0) {
            v = v.split("&")[0];
            var y = [];
            for (var x = 0; x < s.length; x++) {
                for (var D in s[x].skill) {
                    y.push(parseInt(s[x].skill[D].maxpt) + 2)
                }
            }
            var C = v.substr(1, v.indexOf("|") - 1);
            var A = v.substr(v.indexOf("|") + 1);
            var r = SmallHash.decode(C, y, d);
            for (var x = 0; x < s.length; x++) {
                var z = 0,
                u = x;
                while (--u >= 0) {
                    z += s[u].skill.length
                }
                for (var E in s[x].skill) {
                    if (r[parseInt(E) + z] != parseInt(s[x].skill[E].defaultpt)) {
                        s[x].skill[E].on_flag = "off";
                        s[x].skill[E].currentpt = r[parseInt(E) + z]
                    }
                }
            }
            A = A.split("$");
            s[0].spent_sp = A[0];
            s[1].spent_sp = A[1];
            if (s[2]) {
                s[2].spent_sp = A[2]
            }
            skill_draw_tree("ALL")
        } else {
            skill_draw_tree("ALL")
        }
    }
})();