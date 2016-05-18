from FileIO import*
import xml.etree.ElementTree as ET
import csv
import re


def messages(uistring):
    '''
    (str) -> dict
    
    Read uistring(uistring.xml) and return a dictionary that mid as key, message
    as value.
    '''
    tree = ET.parse(uistring)
    root = tree.getroot()
    result = {}
    result["0"] = ""

    for child in root:
        mid = child.attrib["mid"]
        text = child.text
        result[mid] = text
    return result


def write_levelSP_csv(playerleveltablednt, jobtablednt, lvlcap, filename="levelSP.csv"):
    """
    (str, str) -> none
    
    Precondiction: First str is dnt file name, second str is csv file name.
    
    Write the selected info to csv from playerleveltable.dnt under the same
    directory. The csv has name levelSP.csv
    
    Notes: Level info is up to lvl90. May need to update if game updates.
    
    """
    
    # lvl: 15, 45, 90
    # lvl15 class1 added
    # lvl45 class2 added
    # class max sp ratio in jobtable.dnt
    # class 0:     index 7
    # class 1:     index 8
    # class 2:     index 9
    ## class 0: 1
    ## class 1: 0.625, 0.645
    ## class 2: 0.625, 0.645, 0.625
    
    class0_ratio = 0
    class1_ratio = 0
    class2_ratio = 0
    jobtable = read_DNT_from_file(jobtablednt)
    for i in range(1, len(jobtable)):
        row = jobtable[i]
        if float(row[9]) != 0:
            class0_ratio = float(row[7])
            class1_ratio = float(row[8])
            class2_ratio = float(row[9])
            break
            
    print(str(class0_ratio))
    print(str(class1_ratio))
    print(str(class2_ratio))    
            
    lvltable = read_DNT_from_file(playerleveltablednt)
    lvl = ["level"]
    sp = ["SP"]
    sp0 = ["MaxSPClass0"]
    sp1 = ["MaxSPClass1"]
    sp2 = ["MaxSPClass2"]
    
    total = 0
    for i in range(1, len(lvltable)):
        total += int(lvltable[i][7])
        lvl.append(lvltable[i][0])
        sp.append(str(total))
        if i < 15:
            sp0.append(str(total))
            sp1.append(0)
            sp2.append(0)
        elif i < 45:
            sp0.append(str(int(total*class0_ratio)))
            sp1.append(str(int(total*class1_ratio)))
            sp2.append(0)
        # so far lvl 90
        elif i <lvlcap+1:
            sp0.append(str(int(total*class0_ratio)))
            sp1.append(str(int(total*class1_ratio)))
            sp2.append(str(int(total*class2_ratio)))
        else:
            sp0.append(0)
            sp1.append(0)
            sp2.append(0)           
    result = [lvl, sp, sp0, sp1, sp2]
    write_to_csv_by_columns(filename, result)
    
    
def write_skillinfo_csv(file_name1, save_to_folder, uistring, skilltable_character, skilltreetable, jobtable, weapondict):
    """
    (str) -> none
    
    Precondition: Require files in the same directory:
                  skilltable_character.dnt, skilltreetable.dnt, jobtable.dnt
    
    Write selected info from skillleveltable_characterxxxxxxxx.dnt. The function
    is written column by column.
    The csv file has the name skillinfo_skillleveltable_characterxxxxx.csv under
    the same directory.
    
    IMPORTANT: Require weapon are using weapondict in this function. May need to
           update if game updates.
           Skill type is basic on current info from ingame. May need to update.
    """
    
    #  skillleveltable_characteracademicpvp.dnt
    #  _SkillIndex                          index 1
    #  _SkillLevel                          index 2
    #  level limit                          index 13
    #  CD                                   index 14
    #  MP cost                              index 19
    #  _SkillExplanationID(xml)             index 20
    #  _SkillExplanationParam               index 21
    #  temp_name                            index 34
    #  _NeedSkillPoint                      index 48
    #  _StartSuperArmor                     index 50
    
    #  skilltable_character.dnt
    #  _nRow (对应skillleveltable的_SkillIndex)        index 0
    # _NameID (对应uistring.xml里的mid)                index 1
    # icon image index                                 index 3
    # buff icon image index                            index 4
    # debuff icon image index                          index 5
    # need job                                         index 6
    # need weapon type 1                               index 7
    # need weapon type 2                               index 8
    # _MaxLevel                                        index 9 
    # skill type                                       index 10
    # duration type                                    index 11
    # target type                                      index 12
    # element                                          index 14
    # global cool time pve                             index 49
    # global cool time pvp                             index 50
    # global skill group                               index 51
    # skill group                                      index 53
    
    # skilltreetable.dnt
    # skill index                            index 1
    # tree slot index                        index 6
    # parent skill ID1                       index 7
    # parent skill ID2                       index 8
    # parent skill ID3                       index 9
    # need parent skill lvl 1                index 10
    # need parent skill lvl 2                index 11
    # need parent skill lvl 3                index 12
    # need basic SP1                         index 13
    # need first SP1                         index 14
    # need second SP1                        index 15
    # advice skill lvl 1                     index 16
    # advice skill lvl 2                     index 17
    # advice skill lvl 3                     index 18
    # change skill                           index 22
    
    # jobtable.dnt
    # job name                      index 1
    # job number(0,1,2)             index 2
    # base class                    index 3
    # parent job                    index 4
    # english name                  index 5
    # job icon                      index 6
    # max sp job 0                  index 7
    # max sp job 1                  index 8
    # max sp job 2                  index 9
    # max sp job 3                  index 10
    # max sp job 4                  index 11
    # class                         index 16
    # job description ID            index 18
    # skill id                      index 22
    # ex skill                      index 23    
    # dark job                      index 30
    
    pvp = read_DNT_from_file(file_name1)
    pvp_col = [list(i) for i in list(zip(*pvp))]
    char = read_DNT_from_file(skilltable_character)
    skilltreetable = read_DNT_from_file(skilltreetable)
    jobtable = read_DNT_from_file(jobtable)

    title = []
    result = []
    
    # MID (in uistring.xml)
    title.append("MID")
    # Skill Index (in skillleveltable_characterXX dnt)
    title.append("SkillIndex")
    skillindex = pvp_col[1][1:]
    skillMID = []
    
    # skip those index that can not find MID
    skipindexlist = []
    for i in range(len(skillindex)):
        flag = False
        for j in char:
            if j[0] == skillindex[i]:
                flag = True
                skillMID.append(j[1])
                break 
        if not flag:
            skipindexlist.append(i)
    print("=======" + file_name1 + "=======")
    print("Index that skipped(cannot find MID): " + str(skipindexlist))
    
    count = 0
    for i in skipindexlist:
        skillindex.pop(i-count)
        count+=1
    
    result.append(skillMID)
    result.append(skillindex)

    # StartSuperArmor (in skillleveltable_characterXX dnt)
    title.append("StartSuperArmor")
    skillsuperarmor = pvp_col[50][1:]
    count = 0
    for i in skipindexlist:
        skillsuperarmor.pop(i-count)
        count+=1    
    result.append(skillsuperarmor)    
         
    # Skill Name (in skillleveltable_characterXX dnt)
    title.append("SkillName")
    skillnames = []
    for i in skillMID:
        # set those message that cannot find in uistring.xml to ''
        try:
            msg = uistring[i]
        except:
            print("MID that cannot find in uistring.xml: " + i)
            msg = ""
        skillnames.append(msg)
    result.append(skillnames)
    
    # Skill Need Job (in skilltable_character.dnt)
    title.append("SkillNeedClass")
    needjob = []
    needjobstr = []
    for i in skillindex:
        for j in char:
            if j[0] == i:
                needjob.append(j[6])
    for i in needjob:
        msg = ""
        for j in jobtable:
            if j[0] == i:
                msg = uistring[j[1]]
                break
        needjobstr.append(msg.upper().replace(" ", ""))
                
    result.append(needjobstr)
    
    # Skill Tree Slot Index (in skilltreetable.dnt)
    title.append("SkillTreeSlotIndex")
    treeindex = []
    for i in skillindex:
        treeslot = ""
        for j in skilltreetable:
            if j[1] == i:
                treeslot = j[6]
        treeindex.append(treeslot)
    result.append(treeindex)   
    
    # Skill Level (in skillleveltable_characterXX dnt)
    title.append("SkillLevel")
    skilllevel = pvp_col[2][1:]
    count = 0
    for i in skipindexlist:
        skilllevel.pop(i-count)
        count+=1    
    result.append(skilllevel)  
    
    # Fee MP (in skillleveltable_characterXX dnt)
    title.append("FeeMP")
    feeMP = pvp_col[19][1:]
    count = 0
    for i in skipindexlist:
        feeMP.pop(i-count)
        count+=1    
    MP = []
    for i in feeMP:
        MP.append(str(int(i)/10))
    result.append(MP)  
    
    # Required Weapon 1(in skilltable_character.dnt)
    title.append("RequireWeapon1")
    # Required Weapon 2(in skilltable_character.dnt)
    title.append("RequireWeapon2")
    requireweapon1 = []
    requireweapon2 = []
    for i in skillindex:
        for j in char:
            if j[0] == i:
                requireweapon1.append(j[7])
                requireweapon2.append(j[8])
    result.append(requireweapon1)
    result.append(requireweapon2)
    
    # weapon 1
    title.append("weapon 1")
    # weapon 2
    title.append("weapon 2")
    
    wea1 = []
    wea2 = []
    
    for i in range(len(requireweapon1)):
        rewea1 = requireweapon1[i]
        rewea2 = requireweapon2[i]
        if rewea1 in weapondict.keys():
            wea1.append(weapondict[rewea1])
        else:
            wea1.append("")
            print("Weapon 1: found other things: " + str(rewea1))
        if rewea2 in weapondict.keys():
            wea2.append(weapondict[rewea2])
        else:
            wea2.append("")
            print("Weapon 2: found other things: " + str(rewea2))
    
    result.append(wea1)
    result.append(wea2)
    
    # Skill Type (in skilltable_character.dnt)
    title.append("SkillType")
    # Skill Duration Type(in skilltable_character.dnt)
    title.append("DurationType")
    # Skill Target Type(in skilltable_character.dnt)    
    title.append("TargetType")
    skilltype = []
    durtype = []
    tartype = []
    for i in skillindex:
        for j in char:
            if j[0] == i:
                skilltype.append(j[10])
                durtype.append(j[11])
                tartype.append(j[12])
    result.append(skilltype)
    result.append(durtype)
    result.append(tartype)
    
    # skill type in text
    title.append("SkillTypeInfo")
    # not for sure so far
    # 3xx passive enhance
    # 2xx passive
    # 1xx passive
    # 0xx instant
    # x5x active toggle
    # x2x debuff

    skilltypestr = []
    for i in range(len(skilltype)):
        if skilltype[i] == "3":
            skilltypestr.append("Passive Enhance")
        elif skilltype[i] == "2":
            skilltypestr.append("Passive")
        elif skilltype[i] == "1":
            skilltypestr.append("Passive")
        elif skilltype[i] == "0":
            if durtype[i] == "8":
                skilltypestr.append("Buff")
            elif durtype[i] == "7" or durtype[i] == "6":
                skilltypestr.append("Instant")
            elif durtype[i] == "5":
                skilltypestr.append("Active Toggle")
            elif durtype[i] == "2":
                skilltypestr.append("Debuff")
            elif durtype[i] == "1":
                skilltypestr.append("Buff")
            elif durtype[i] == "0":
                skilltypestr.append("Instant")
            else:
                skilltypestr.append("")
                print("SkillTypeInfo - Found other things")
        else:
            skilltypestr.append("")
            print("SkillTypeInfo - Found other things")
            
    result.append(skilltypestr)

    # skill cooldown (in skillleveltable_characterXX dnt)
    title.append("SkillCooldown")
    CD = pvp_col[14][1:]
    count = 0
    for i in skipindexlist:
        CD.pop(i-count)
        count+=1    
    CD_sec = []
    for i in CD:
        CD_sec.append(str(int(i)/1000))
    result.append(CD_sec)        
    
    # Skill Max Level (in skilltable_character.dnt)
    title.append("SkillMaxLevel")
    skillmaxlevel = []
    for i in skillindex:
        for j in char:
            if j[0] == i:
                skillmaxlevel.append(j[9])
    result.append(skillmaxlevel)      
    
    
    # ====== Level Up Requirements ======
    
    # Required Char Level (in skillleveltable_characterXX dnt)
    title.append("RequireCharLevel")
    lvllimit = pvp_col[13][1:]
    count = 0
    for i in skipindexlist:
        lvllimit.pop(i-count)
        count+=1    
    result.append(lvllimit)   
    
    # Required parent skill 1 (in skilltreetable.dnt)
    title.append("RequiredSkill_1")
    # Required parent skill 1 name
    title.append("RequiredSkill_1_name")
    # Required parent skill 1 lvl (skilltreetable.dnt)
    title.append("RequiredSkill_1_lvl")
    # Required parent skill 1 (in skilltreetable.dnt)
    title.append("RequiredSkill_2")
    # Required parent skill 2 name
    title.append("RequiredSkill_2_name")    
    # Required parent skill 1 lvl (skilltreetable.dnt)
    title.append("RequiredSkill_2_lvl")   
    # Required parent skill 1 (in skilltreetable.dnt)
    title.append("RequiredSkill_3")
    # Required parent skill 3 name
    title.append("RequiredSkill_3_name")    
    # Required parent skill 1 lvl (skilltreetable.dnt)
    title.append("RequiredSkill_3_lvl")    
    reskill1 = []
    reskill1name = []
    reskill1lvl = []
    reskill2 = []
    reskill2name = []
    reskill2lvl = []
    reskill3 = []
    reskill3name = []
    reskill3lvl = []
    for i in skillindex:
        r1 = ""
        r2 = ""
        r3 = ""
        rlvl1 = ""
        rlvl2 = ""
        rlvl3 = ""
        name1 = ""
        name2 = ""
        name3 = ""
        for j in skilltreetable:
            if j[1] == i:
                for k in range(len(skillindex)):
                    if j[7] == skillindex[k]:
                        r1 = skillindex[k]
                        name1 = skillnames[k]
                    elif j[8] == skillindex[k]:
                        r2 = skillindex[k]
                        name2 = skillnames[k]
                    elif j[9] == skillindex[k]:
                        r3 = skillindex[k]
                        name3 = skillnames[k]
                rlvl1 = j[10]
                rlvl2 = j[11]
                rlvl3 = j[12]
        reskill1.append(r1)
        reskill2.append(r2)
        reskill3.append(r3)
        reskill1lvl.append(rlvl1)
        reskill2lvl.append(rlvl2)
        reskill3lvl.append(rlvl3)
        reskill1name.append(name1)
        reskill2name.append(name2)
        reskill3name.append(name3)
    result.append(reskill1)
    result.append(reskill1name)
    result.append(reskill1lvl)
    result.append(reskill2)
    result.append(reskill2name)
    result.append(reskill2lvl)    
    result.append(reskill3)
    result.append(reskill3name)
    result.append(reskill3lvl)    
    
    # class0 (in jobtable.dnt)
    title.append("class0")
    # class1 (in jobtable.dnt)
    title.append("class1")
    # class2 (in jobtable.dnt)
    title.append("class2")
    jobs0 = []
    jobs1 = []
    jobs2 = []
    jobtable_nRow = []
    for i in jobtable:
        jobtable_nRow.append(i[0])
        
    for i in needjob:
        j0 = ""
        j1 = ""
        j2 = ""
        if i != "":
            try:
                index = jobtable_nRow.index(i)
            except:
                jobs0.append(j0)
                jobs1.append(j1)
                jobs2.append(j2)                
                continue
            jobnum = jobtable[index][2]
            if jobnum == "0":
                j0 = uistring[jobtable[index][1]]
            elif jobnum == "1":
                j1 = uistring[jobtable[index][1]]
                j0 = uistring[jobtable[jobtable_nRow.index(jobtable[index][4])][1]]
            elif jobnum == "2":
                j2 = uistring[jobtable[index][1]]
                j1 = uistring[jobtable[jobtable_nRow.index(jobtable[index][4])][1]]
                j0 = uistring[jobtable[jobtable_nRow.index(jobtable[jobtable_nRow.index(jobtable[index][4])][4])][1]]

        jobs0.append(j0.upper().replace(" ", ""))
        jobs1.append(j1.upper().replace(" ", ""))
        jobs2.append(j2.upper().replace(" ", ""))
                
    result.append(jobs0)    
    result.append(jobs1)  
    result.append(jobs2)  
    
    
    # Required class0 SP (skilltreetable.dnt)
    title.append("RequireClass0SP")
    # Required class1 SP (skilltreetable.dnt)
    title.append("RequireClass1SP")    
    # Required class2 SP (skilltreetable.dnt)
    title.append("RequireClass2SP")
    reclass0sp = []
    reclass1sp = []
    reclass2sp = []
    for i in skillindex:
        rsp0 = ""
        rsp1 = ""
        rsp2 = ""
        for j in skilltreetable:
            if j[1] == i:
                rsp0 = j[13]
                rsp1 = j[14]
                rsp2 = j[15]
        reclass0sp.append(rsp0)
        reclass1sp.append(rsp1)
        reclass2sp.append(rsp2)
    result.append(reclass0sp)
    result.append(reclass1sp)
    result.append(reclass2sp)
    
    
    # Required SP (in skillleveltable_characterXX dnt)
    title.append("RequireSP")
    needskillpoint = pvp_col[48][1:]
    count = 0
    for i in skipindexlist:
        needskillpoint.pop(i-count)
        count+=1    
    result.append(needskillpoint)
    
    # change skill index(in skilltreetable.dnt)
    # this is skill changed to new skill after active toggle skill
    # TODO: handle multiple skills
    title.append("ChangeSkillIndex")
    changeskillindex = []
    for i in skillindex:
        changeskill = ""
        for j in skilltreetable:
            if j[1] == i:
                changeskill = j[22]
        changeskillindex.append(changeskill)
    result.append(changeskillindex)    
    
    
    
    # skill explanation ID (in skillleveltable_characterXX dnt)
    title.append("SkillExplanationID")
    # skill explanation (in uistring.xml)
    title.append("SkillExplanationAll")
    title.append("SkillExplanation")
    # skill expanation para
    title.append("SkillExplanationPara")
    exp = []
    expall = []
    expID = pvp_col[20][1:]
    expPara = pvp_col[21][1:]
    count = 0
    for i in skipindexlist:
        expID.pop(i-count)
        expPara.pop(i-count)
        count+=1    
    
    for i in range(0, len(expPara)):
        expPara[i] = expPara[i].replace(",","FUCK")
        #====
        # find the description in expPara
        pattern = re.compile("\{\d*\}")
        match = pattern.findall(expPara[i])
        
        for j in match:
            if j == "{}":
                print("Empty Message")
            expMSG = uistring[j[1:-1]]
            expPara[i] = expPara[i].replace(j, expMSG)
    
    for i in range(len(expID)):
        try:
            para = expPara[i].split("FUCK")
            msg = uistring[expID[i]]
            msg = msg.replace("\n","")
            msg = msg.replace("#n", "\\n")
        except:
            print("cant find expID: " + expID[i])
            msg = ""

        #===============
        # these are for class.js
        # t2 for CD
        # t3 for char lvl
        # t4 for SP
        # start count from 5
        #==============
        # March 29th 2015
        # if the para too long will cause problem
        # so at the symbol t to perform over replaceing
        count = 5;
        msg1 = msg
        msg2 = msg
        for j in range(len(para)):
            msg1 = msg1.replace("{" + str(j) + "}", "{t" +  str(count) + "}")
            msg2 = msg2.replace("{" + str(j) + "}", para[j])
            count += 1
        msg1 = msg1.replace("{t", "{")
        
        exp.append(msg1)
        expall.append(msg2)        
    
    result.append(expID)
    result.append(expall)
    result.append(exp)
    result.append(expPara)
    
    title.append("SPMaxLevel")
    spmaxlevel = []
    
    for i in skillindex:
        for j in char:
            if j[0] == i:
                spmaxlevel.append(j[54])
                break     
    result.append(spmaxlevel)
    
    # icon image index in skilltable_character.dnt
    title.append("IconImageIndex")
    icons = []
    
    for i in skillindex:
            for j in char:
                if j[0] == i:
                    icons.append(j[3])
                    break     
    result.append(icons)
    
    #July 22 2015, add element(attribute)
    #==============================================
    # -1 : None
    #  0 : Fire
    #  1 : Water
    #  2 : Light
    #  3 : Dark
    
    title.append("Element")
    elements = []
    
    for i in skillindex:
        for j in char:
            if j[0] == i:
                ele = j[14]
                if ele == "-1":
                    elements.append("None")
                elif ele == "0":
                    elements.append("Fire")
                elif ele == "1":
                    elements.append("Water")
                elif ele == "2":
                    elements.append("Light")
                elif ele == "3":
                    elements.append("Dark")
                else:
                    raise
                break     
    result.append(elements)    
    

    #///////////////////////////

    
    if len(result) != len(title):
        print("length not the same you idiot!")
        return
    
    sets = set()
    for i in range(len(result)):
        result[i].insert(0, title[i])
        sets.add(len(result[i]))
    if len(sets) != 1:
        print("The size of each columns are not the same.")
        print("Needs to fix it before continue.")
        
    
    # change to rows
    rowresult = list(zip(*result))
    
    finalresult = []
    changeskillresult = []
    changeskillIDlist = []
    
    finalresult.append(rowresult[0])
    # delete those with skill tree slot(index 5) is ""
    for i in range(1, len(rowresult)):
        if rowresult[i][5] != "":
            finalresult.append(rowresult[i])
            if rowresult[i][35] != "":
                changeskillIDlist.append(rowresult[i][35])
    
    countchangeskill = 0     
    changeskillresult.append(rowresult[0])       
    for i in range(1, len(rowresult)):
        if rowresult[i][1] in changeskillIDlist:
            changeskillresult.append(rowresult[i])
            countchangeskill+=1
    
    index = file_name1.rfind("/")
    name = ""
    if index != -1:
        name = file_name1[index+1:-4]
    else:
        name = file_name1[:-4]
    
    write_to_csv_by_rows(save_to_folder + "skillinfo_" + name + ".csv", finalresult)
    write_to_csv_by_rows(save_to_folder + "skillinfo_changeskill_" + name + ".csv", changeskillresult)


