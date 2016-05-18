import csv
import codecs

def cids(class_list):
    '''
    (list) -> dict
    
    Return a dictionary contains class as key and cid as value.
    '''

    cid = 1;
    result = {}
    for i in class_list:
        result[i] = str(cid)
        cid += 1
            
    return result


def find_row(lis, name, value):
    ''''''
    for i in lis:
        if i[name] == value:
            return i
    return []


def output_json_str(skillinfo, job2_name, class_dict, cid_dict, lvlcap, exclusive_skills, save_to_folder):
    '''
    Notes: Compare to the original list in OutputSkillJs.py. This one changed:
           first list:    
             - job2, job, type in list
           skill list:
             - type = ""
             - openicon, closeicon
             
             ==========================
             
            json_str = [{job0}, {job1}, {job2}]
            in job dictionary:
            ex: TINKERER
            {
                "skill": [{skill0}, {skill1}, ...]
                "job2"  : "GEARMASTER" // job2
                "job"   : "ENGINEER" // job1
                "type"  : "TINKERER_ENGINEER_GEARMASTER" // job0_job1_job2
                "bg"    : "" //none
                "c_id"  : "2" //current job's c_id, in cid dictionary
            }
            in skill dictionary:
            {
                "id"   : "4001" //SkillIndex
                "type" : "" //none
                "x"    : "1" // skill tree slot row, start at 1
                "y"    : "1" // skill tree slot column, start at 1
                "maxpt": "27" // max skill level (in skill tree)
                "defaultpt": "1" // default skill level
                "img"  : "" // none
                "lvlimit"  : "1"  character level for learn this skill
                "openicon" : "4001.jpg" // icon
                "closeicon": "4001_off.jpg" // off icon
                "parent"   : null or [{parent0}, {parent1}, ...]
                "child"    : null or [{child0}, {child1}, ...]
                "conflict" : null or [{conflict0}, {conflict1}, ...]
                "skill_info" : [{lvl1}, {lvl2}, ...]
                (optional)skill_limit : "20" // pre-job required SP
            }
            in parent and child dictionary:
            // for prerequiresite skills
            {
                "id"   : "4001" // SkillIndex
                "lv"   : "6" // required skill level
                "s_id" : "2" //skill's job
            }
            in conflict dictionary:
            // for now it's for 40 ult skills
            {
                "slv" : "1" // unkown, always 1
                "tlv" " "0" // unkown, always 0
            }
            in skill_info dictionary:
            {
                "chlv" : "1" // required character level
                "sp"   : "3" // required sp
                "sklv" : "1" // skill level
                "img"  : "" // none
            }
    '''
    
    
    classes = class_dict
    cids = cid_dict
    
    rows = []
    with codecs.open(skillinfo, "r", 'utf-8') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            rows.append(row)    
    
    joblist = classes[job2_name]
    
    json = [{}, {}, {}]
    
    # Done: json's "job2", "job", "bg"
    for job in json:
        job["skill"] = []
        job["job2"] = classes[job2_name][2]
        job["job"] = classes[job2_name][1]
        job["type"] = ""
        job["bg"] = ""
        job["c_id"] = cids[job2_name]
        
    # Done: json's "type"
    json[0]["type"] = joblist[0]
    json[1]["type"] = joblist[0] + "_" + joblist[1]
    json[2]["type"] = joblist[0] + "_" + joblist[1] + "_" + joblist[2]
    
    spmaxlevel = {}
    
    with codecs.open(skillinfo, "r", 'utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            
            #===
            if row["SkillIndex"] not in spmaxlevel.keys():
                spmaxlevel[row["SkillIndex"]] = row["SPMaxLevel"]
            #===
            
            jobdict = {}
            if row["SkillNeedClass"].lower() == joblist[0].lower():
                jobdict = json[0]
            elif row["SkillNeedClass"].lower() == joblist[1].lower():
                jobdict = json[1]
            elif row["SkillNeedClass"].lower() == joblist[2].lower():
                jobdict = json[2]
            
            if not jobdict:
                continue
            
            job_skill = jobdict["skill"]
            
            if row["SkillLevel"] == "1":
                skills = {}
                skills["skill_info"] = []
                skills["child"] = "null"
                skills["conflict"] = "null"
                skills["id"] = row["SkillIndex"]
                skills["lvlimit"] = row["RequireCharLevel"]
                skills["type"] = ""
                skills["img"] = ""
                skills["x"] = str(int(row["SkillTreeSlotIndex"])//4 + 1)
                skills["y"] = str(int(row["SkillTreeSlotIndex"])%4 + 1)
                if row["RequireSP"] == '0':
                    if row["RequiredSkill_1"] == "" and row["RequiredSkill_2"] == "" and row["RequiredSkill_3"] == "" and\
                       row["RequireClass0SP"] == "0" and row["RequireClass1SP"] == "0" and row["RequireClass2SP"] == "0" and\
                       row["RequireCharLevel"] == "1":
                        skills["defaultpt"] = '1'
                else:
                    skills["defaultpt"] = '0'
                skills["openicon"] = row["SkillIndex"] + ".jpg"
                skills["closeicon"] = row["SkillIndex"] + "_off" + ".jpg"
                
                # Handle parent
                parent = []
                if row["RequiredSkill_1"] != "":
                    temp = {}
                    temp["id"] = row["RequiredSkill_1"]
                    temp["lv"] = row["RequiredSkill_1_lvl"]
                    temp["s_id"] = cids[find_row(rows, "SkillIndex", row["RequiredSkill_1"])["SkillNeedClass"].upper()]
                    parent.append(temp)
                if row["RequiredSkill_2"] != "":
                    temp = {}
                    temp["id"] = row["RequiredSkill_2"]
                    temp["lv"] = row["RequiredSkill_2_lvl"]
                    temp["s_id"] = cids[find_row(rows, "SkillIndex", row["RequiredSkill_2"])["SkillNeedClass"].upper()]
                    parent.append(temp)
                if row["RequiredSkill_3"] != "":
                    temp = {}
                    temp["id"] = row["RequiredSkill_3"]
                    temp["lv"] = row["RequiredSkill_3_lvl"]
                    temp["s_id"] = cids[find_row(rows, "SkillIndex", row["RequiredSkill_3"])["SkillNeedClass"].upper()]
                    parent.append(temp)
                
                if parent:
                    skills["parent"] = parent
                else:
                    skills["parent"] = "null"
                
                #handle exclusive
                for pair in exclusive_skills:
                    if row["SkillIndex"] == pair[0]:
                        skills["exclusive"] = [{"id":pair[1]}]
                    elif row["SkillIndex"] == pair[1]:
                        skills["exclusive"] = [{"id":pair[0]}]                    
                        
                job_skill.append(skills)
                    
            # Handle skill_info

            skills = job_skill[-1]
            info = skills["skill_info"]
            subinfo = {}
            subinfo["chlv"] = row["RequireCharLevel"]
            subinfo["sp"] = row["RequireSP"]
            subinfo["sklv"] = row["SkillLevel"]
            subinfo["img"] = ""
            
            info.append(subinfo)
            
            if row["RequireClass0SP"] != "0":
                skills["skill_limit"] = row["RequireClass0SP"]
            elif row["RequireClass1SP"] != "0":
                skills["skill_limit"] = row["RequireClass1SP"]
            elif row["RequireClass2SP"] != "0":
                skills["skill_limit"] = row["RequireClass2SP"]            
            
    # Handle child
    
    parentdict = {}
    for zhuan in json:
        for skill in zhuan["skill"]:
            # start handle in skill
            if skill["parent"] != "null":
                childdict = {"id":skill["id"], "lv":"1", "s_id":zhuan["c_id"]}
                for p in skill["parent"]:
                    pid = p["id"]
                    if pid not in parentdict.keys():
                        parentdict[pid] = [childdict]
                    else:
                        parentdict[pid].append(childdict)
    for zhuan in json:
        for skill in zhuan["skill"]:
            if skill["id"] in parentdict.keys():
                skill["child"] = parentdict[skill["id"]]
                                        
    # Handle maxpt
    skill
    for zhuan in json:
        for skill in zhuan["skill"]:
            skillindex = skill["id"]
            skill["maxpt"] = str(int(skill["skill_info"][-1]["sklv"]) - int(spmaxlevel[skillindex]))
            
                    
    # Handle conflict
    # Assume that it's only for 40 ult. And assume that only 40 ult's lvlimit
    # is 40.
    ults = []
    zhuan1 = json[1]
    for skill in zhuan1["skill"]:
        if skill["lvlimit"] == "40":
            ultID = skill["id"]
            ultdict = {"id":ultID, "slv":"1", "tlv":"0"}
            ults.append([ultID, ultdict])
    if len(ults) != 2:
        print(job2_name + str(ults))
        print("Something wrong about 2 ultimate skills.")
    
    
    # for DA, single ult, if not DA, add conflict
    if joblist[1] != "AVENGER":        
        for skill in zhuan1["skill"]:
            if skill["id"] == ults[0][0]:
                skill["conflict"] = [ults[1][1]]
            elif skill["id"] == ults[1][0]:
                skill["conflict"] = [ults[0][1]]
    
       
    #March 29th 2015 added
    #===============================
    #this is solving the prerequisite skill is defaultpt is 0 problem.
    #what to do is wiping out the parent, which it's defaultpt is 0.
    #and the defaultpt's child
    #assume that these skills only have one parent (defaultpt =0) and one child
    #assume based on current class 1-7 only has most 2 skills in first class has this.
    for zhuan in json:
        for skill in zhuan["skill"]: 
            # here, assume skill has only one parent has this
            if skill["parent"] != "null" and len(skill["parent"]) == 1:
                parentID = skill["parent"][0]["id"]
                #print("yuan id: " + skill["id"] + "\t" + "parent: " + parentID)
                is_defaultpt_zero = False;
                # now find the ID in json_str
                for zhuan2 in json:
                    for skill2 in zhuan2["skill"]:
                        if skill2["id"] == parentID:
                            if skill2["defaultpt"] == "1":
                                skill2["child"] = "null"
                                skill["parent"] = "null"
                                
    #===============================
    
    #March 29th 2015 added
    #===============================
    # add the 65SP reqquirement for the lvl80 skill
    # (original list not has that requirement, but need it for restrict learning)
    zhuan = json[2]
    for skill in zhuan["skill"]:
        if skill["lvlimit"] == "80":
            skill["skill_limit"] = "65"
    
    f = open(save_to_folder + job2_name + "_json_str.js", "w")
    thestr = str(json)
    thestr = thestr.replace("'null'", "null")
    thestr = thestr.replace("'skill_limit'", "skill_limit")
    thestr = "var json_str = \"" + thestr + "\";"
    f.write(thestr)
    f.close()
    return json


def output_skillstringJS(skillinfo, changeskill, job0_name, save_to_folder):
    ''''''
    
    f = codecs.open(save_to_folder + job0_name + ".js", "w", 'utf-8')
    f.write("var SIM_LableHash = {\n")
    f.write("\t'lvl':'Skill Lv.',\n")
    f.write("\t'MP':'Fee MP',\n")
    f.write("\t'cast':'Skill Type',\n")
    f.write("\t'CD':'Cooldown',\n")
    f.write("\t'lvlup':'Level Up Requirements',\n")
    f.write("\t'effect':'Skill Description',\n")
    f.write("\t'element':'Attribute',\n")
    f.write("\t'weapon':'Required Weapon',\n")
    f.write("\t'nexteffect':'Skill Description (Next Level)'\n")
    f.write("};\n")
    f.write("\n")
    f.write("SIM_AddSkill({\n")
    #========================
    
    rows = []
    #with open(skillinfo) as csvfile:
    with codecs.open(skillinfo,'r','utf-8') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            rows.append(row)
    try:
        with codecs.open(changeskill,'r','utf-8') as csvfile:
            csv_reader = csv.DictReader(csvfile)
            for row in csv_reader:
                rows.append(row)
    except:
        1 == 1
    
    dic = {}
    for row in rows:
        if row["SkillIndex"] not in dic.keys():
            subdic = {}
            subdic["name"] = row["SkillName"]
            subdic["cast"] = row["SkillTypeInfo"]
            subdic["CD"] = ['null']
            subdic["charl"] = []
            subdic["skl"] = []
            subdic["sp"] = []
            subdic["exp"] = []
            subdic["expall"] = []
            subdic["para"] = []
            subdic["RequiredSkills"] = []
            subdic["RequiredClassSP"] = []
            subdic["Element"] = row["Element"]
            subdic["Weapon"] = ""       
            subdic["ChangeSkillIndex"] = ""
            dic[row["SkillIndex"]] = subdic
            
            
        skilldic = dic[row["SkillIndex"]]
        #July 28th 2015
        #=========================
        if row["ChangeSkillIndex"] != "":
            subdic["ChangeSkillIndex"] = row["ChangeSkillIndex"]
        #July 22nd 2015
        #=========================
        if row["weapon 1"] == "" and row["weapon 2"] == "":
            subdic["Weapon"] = ""
        elif row["weapon 1"] != "" and row["weapon 2"] != "":
            subdic["Weapon"] = row["weapon 1"] + ", " + row["weapon 2"]
        elif  row["weapon 1"] != "" and row["weapon 2"] == "":
            subdic["Weapon"] = row["weapon 1"]
        elif  row["weapon 1"] == "" and row["weapon 2"] != "":
            subdic["Weapon"] = row["weapon 2"]
        #March 29th 2015
        #=========================
        # fix the cd not show when skill not learn
        # what we do is at the cd[1] to cd[0]
        skilldic["CD"].append(row["SkillCooldown"])
        skilldic["CD"][0] = skilldic["CD"][1]
        #=========================
        skilldic["charl"].append(row["RequireCharLevel"])
        skilldic["skl"].append(row["SkillLevel"])
        skilldic["sp"].append(row["RequireSP"])
        #======
        skilldic["exp"].append(row["SkillExplanation"])
        #======
        skilldic["para"].append(row["SkillExplanationPara"])
        skilldic["expall"].append(row["SkillExplanationAll"])
        #TODO: different exp
        if row["RequiredSkill_1_name"] != "":
            skilldic["RequiredSkills"].append(row["RequiredSkill_1_name"] + " Lv. " + row["RequiredSkill_1_lvl"])
        if row["RequiredSkill_2_name"] != "":
            skilldic["RequiredSkills"].append(row["RequiredSkill_2_name"] + " Lv. " + row["RequiredSkill_2_lvl"]) 
        if row["RequiredSkill_3_name"] != "":
            skilldic["RequiredSkills"].append(row["RequiredSkill_3_name"] + " Lv. " + row["RequiredSkill_3_lvl"])
            
        if row["RequireClass0SP"] != "0" and row["RequireClass0SP"] != "":
            skilldic["RequiredClassSP"].append(row["class0"][0].upper() + row["class0"][1:].lower() + " SP Total " + row["RequireClass0SP"] + " or above")
        if row["RequireClass1SP"] != "0" and row["RequireClass1SP"] != "":
            skilldic["RequiredClassSP"].append(row["class1"][0].upper() + row["class1"][1:].lower() + " SP Total " + row["RequireClass1SP"] + " or above")
        if row["RequireClass2SP"] != "0" and row["RequireClass2SP"] != "":
            skilldic["RequiredClassSP"].append(row["class2"][0].upper() + row["class2"][1:].lower() + " SP Total " + row["RequireClass2SP"] + " or above")        
            
        
    keys = list(dic.keys())
    for idd in range(len(keys)):
        lastcomma = ","
        if idd == (len(keys) - 1):
            lastcomma = ""
        ID = keys[idd]
        subdic = dic[ID]
        f.write("\t\"" + ID + "\": {\n")
        if "pvp" in skillinfo:
            f.write("\t\t" + "name: \"" + subdic["name"] + " (PVP)\",\n")
        else:
            f.write("\t\t" + "name: \"" + subdic["name"] + "\",\n")
        #28th July 2015
        #=====================
        if subdic["ChangeSkillIndex"] != "":
            f.write("\t\t" + "changeskill: \"" + subdic["ChangeSkillIndex"] + "\",\n")
        f.write("\t\t" + "d1: {\n")
        f.write("\t\t\t" + "'lvl': '{n}',\n")
        if subdic["Weapon"] != "":
            f.write("\t\t\t" + "'weapon': \"" + subdic["Weapon"] + "\",\n")
        f.write("\t\t\t" + "'cast': \"" + subdic["cast"] + "\",\n")
        f.write("\t\t\t" + "'element': \"" + subdic["Element"] + "\",\n")
        f.write("\t\t\t" + "'CD': '{t2} sec',\n")
        f.write("\t\t" + "},\n")
        f.write("\t\t" + "d2: {\n")
        
        # handle lvlup requirement
        sublvlstr = ""
        for i in set(subdic["RequiredSkills"]):
            sublvlstr = sublvlstr + i + "<br>"
        for i in set(subdic["RequiredClassSP"]):
            sublvlstr = sublvlstr + i + "<br>"
        f.write("\t\t\t" + "'lvlup': \"Character Level {t3}<br>" + sublvlstr + "SP {t4}\",\n")
        
        # handle skill effect
        effect = ""
        isdiff = False
        onlylis = ["null"]
        # handle the different effect (skill descriptions not all the same)
        if len(set(subdic["exp"])) > 1:
            isdiff = True
            subdic["para"] = []
            for e in subdic["expall"]:
                effect = ""
                e = e.replace("# ", " ")
                if "#" in e:
                    index1 = e.find("#")
                    index2 = e.find("#", index1+1)
                    effect = e[:index1]
                    while index2 != -1:
                        effect = effect + e[index1:index2]
                        effect = effect + "?" + e[index1+1]
                        index1 = index2
                        index2 = e.find("#", index1+1)
                    effect = effect + e[index1:]
                    effect = effect + "?" + e[index1+1]
                else:
                    effect = e
                    
                effect = effect.replace("\\n", "<br>")
                effect = effect.replace("#w", "<color_w>")
                effect = effect.replace("#y", "<color_y>")
                effect = effect.replace("#v", "<color_v>")
                effect = effect.replace("#s", "<color_s>")
                effect = effect.replace("#r", "<color_r>")
                effect = effect.replace("#p", "<color_r>")
                effect = effect.replace("?w", "</color_w>")
                effect = effect.replace("?y", "</color_y>")
                effect = effect.replace("?v", "</color_v>")
                effect = effect.replace("?s", "</color_s>")
                effect = effect.replace("?r", "</color_r>")   
                effect = effect.replace("?p", "</color_r>")

                onlylis.append(effect)
        else:
            e = subdic["exp"][0]
            effect = ""
            e = e.replace("# ", " ")
            if "#" in e:
                index1 = e.find("#")
                index2 = e.find("#", index1+1)
                effect = e[:index1]
                while index2 != -1:
                    effect = effect + e[index1:index2]
                    effect = effect + "?" + e[index1+1]
                    index1 = index2
                    index2 = e.find("#", index1+1)
                effect = effect + e[index1:]
                effect = effect + "?" + e[index1+1]
            else:
                effect = e
                    
            effect = effect.replace("\\n", "<br>")
            effect = effect.replace("#w", "<color_w>")
            effect = effect.replace("#y", "<color_y>")
            effect = effect.replace("#v", "<color_v>")
            effect = effect.replace("#s", "<color_s>")
            effect = effect.replace("#r", "<color_r>")
            effect = effect.replace("#p", "<color_r>")
            effect = effect.replace("?w", "</color_w>")
            effect = effect.replace("?y", "</color_y>")
            effect = effect.replace("?v", "</color_v>")
            effect = effect.replace("?s", "</color_s>")
            effect = effect.replace("?r", "</color_r>")
            effect = effect.replace("?p", "</color_r>")
            
        effect = effect.replace("{", "{t")
        #=====
        # handle {1} in explaination (ex: archer multi shot in ver508)
        effect = effect.replace("{t1}", "{1}")
        #=====
        if "#" in effect:
            print("There is a # in description.")
            print(skillinfo)
            #print(effect)
            print(subdic["name"])
        #=====
        if isdiff:
            effect = "{t5}"      
    
        f.write("\t\t\t" + "'effect': \"" + effect + "\",\n")
        
        f.write("\t\t\t" + "'nexteffect': '{next|effect}'\n")
        f.write("\t\t" + "},\n")
        
        # handle list in t
        # assume no null
        # change float to int
        for cddd in range(len(subdic["CD"])):
            tempcddd = float(subdic["CD"][cddd])
            if int(tempcddd) == tempcddd:
                subdic["CD"][cddd] = str(int(tempcddd))
                
        tempstr = str(subdic["CD"])
        #thestr = tempstr[0] + tempstr[2:6] + tempstr[7:]
        tempstr = tempstr.replace("'null'","null")
        f.write("\t\t" + "t: {\n")
        f.write("\t\t\t" + "'{t2}': " + "" + tempstr + ",\n")
        f.write("\t\t\t" + "'{t3}': " + "" + str(subdic["charl"]) + ",\n")
        f.write("\t\t\t" + "'{t4}': " + "" + str(subdic["sp"]) + ",\n")
        

        if isdiff:
            tempstr = str(onlylis)
            #thestr = tempstr[0] + tempstr[2:6] + tempstr[7:]
            tempstr = tempstr.replace("'null'","null")
            f.write("\t\t\t" + "'{t5}': " + tempstr)
        else:
            para = []
            for i in range(len(subdic["para"][0].split("FUCK"))):
                para.append(["null"])
            for k in subdic["para"]:
                lis = k.split("FUCK")
                #print(subdic["name"] + " : " + str(len(para)) + " : " + str(len(lis)))
                for j in range(len(lis)):
                    para[j].append(lis[j])
            count = 5
            for t in range(len(para)):
                tempstr = str(para[t])
                #thestr = tempstr[0] + tempstr[2:6] + tempstr[7:]     
                tempstr = tempstr.replace("'null'","null")
                if t == (len(para) - 1):
                    f.write("\t\t\t" + "'{t" + str(count) + "}': " + tempstr + "\n")
                else:
                    f.write("\t\t\t" + "'{t" + str(count) + "}': " + tempstr + ",\n")
                count += 1
        
        f.write("\t\t}\n")
        f.write("\t}" + lastcomma + "\n")
        
    f.write("});")
    f.close()