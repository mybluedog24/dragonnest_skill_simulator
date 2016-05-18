import os
from OutputForSim import*
from OutputCSV import*
from FileIO import*
from OutputJS import*


def upate(dnt_list, class_list, exclusive_skills, json_str_dict, class_dict, uistring, skilltreetable, jobtable, playerleveltable, weapondict, folderCSV,folderDNT,folderJSON,folderSKILLJS):
    ''''''
    exit = "Booooo! Program exited, bye! Have a nice day!"  
    print("======================")
    ans = input("Did you copy dnt files to <verXXX/dnt> folder? y/n")
    if ans.lower() != "y":
        print(exit)
        return
    
    print("======================")
    ans = input("Did any new class added? y/n")
    if ans.lower() == "y":
        ans = input("If so, did you update all dicts and lists in this program?\nAnd did you add their images and skill_tree_background? y/n")
        if ans.lower() != "y":
            print(exit)
            return        
    elif ans.lower() != 'n':
        print("Wait, what did you put in here? Wrong answer!")
        print(exit)
        return 
    
    print("======================")   
    ans = input("Did any new exclusive skills added to classes? y/n")
    if ans.lower() == "y":
        ans = input("If so, did you update the exclusive skill list in this program? y/n")
        if ans.lower() != "y":
            print(exit)
            return        
    elif ans.lower() != 'n':
        print("Wait, what did you put in here? Wrong answer!")
        print(exit)
        return 
    
    print("======================")
    ans = input("update level cap csv? y/n")
    if ans.lower() == "y":
        update_level_cap(playerleveltable, jobtable, lvlcap, folderCSV)
        print("========================")
        print("Update level cap ended.")
        print("Copy the printed information to sim_silveredge.js")
        print("========================")
        ans = input("Continue? y/n")
        if ans.lower() != "y":
            print(exit)
            return
    
    print("======================")    
    ans = input("update csv files? y/n")
    if ans.lower() == "y":
        update_csv(skilltreetable, jobtable, uistring, dnt_list, weapondict, folderDNT, folderCSV)
        print("========================")
        print("Update csv files ended.")
        print("========================")
        ans = input("Continue? y/n")
        if ans.lower() != "y":
            print(exit)
            return
    
    print("======================")    
    ans = input("update skillJS files (xxx_pve.js, xxx_pvp.js)? y/n")
    if ans.lower() == "y":
        update_skillJS(json_str_dict, folderSKILLJS, folderCSV)
        print("========================")
        print("Update skillJS files ended.")
        print("========================")
        ans = input("Continue? y/n")
        if ans.lower() != "y":
            print(exit)
            return
    
    print("======================")    
    ans = input("update json_str files (for represent skill tree)? y/n")
    if ans.lower() == "y":
        update_json_str(json_str_dict, class_list, class_dict, exclusive_skills, lvlcap, folderJSON, folderCSV)
        print("========================")
        print("Update json_str files ended.")
        print("========================")
        ans = input("Continue? y/n")
        if ans.lower() != "y":
            print(exit)
            return
    
    print("======================")
    ans = input("Do you need to update skill tree background and icons? y/n")
    if ans.lower() == "y":
        ans = input("If so, did you update it? y/n")
        if ans.lower() != "y":
            print(exit)
            return        
    elif ans.lower() != 'n':
        print("Wait, what did you put in here? Wrong answer!")
        print(exit)
        return
    
    print("======================")
    ans = input("Do you need to update html pages? y/n")
    if ans.lower() == "y":
        ans = input("If so, did you update it? y/n")
        if ans.lower() != "y":
            print(exit)
            return        
    elif ans.lower() != 'n':
        print("Wait, what did you put in here? Wrong answer!")
        print(exit)
        return
    
    print("======================")
    ans = input("Finally did you copy all new files to uploadfiles folder? y/n")
    if ans.lower() == "n":
        print(exit)
        return
    elif ans.lower() != 'y':
        print("Wait, what did you put in here? Wrong answer!")
        print(exit)
        return
    
    print("Congratulations! Update done.")
    
    


##================================================
##====== Run this when level cap increases =======
##================================================
##==================== csv =======================
##================================================
## 1. Copy the printed information to sim_silveredge.js
## 2. increase the lvlcap in write_levelSP_csv
## 3. Check playerleveltable to see if the ratio of SP changed

def update_level_cap(playerleveltable, jobtable, lvlcap, folderCSV):
    ''''''
    write_levelSP_csv(playerleveltable, jobtable, lvlcap, folderCSV+"levelSP.csv")
    print_SP_for_simJS(lvlcap, folderCSV+"levelSP.csv")    



##================================================
##====== Run this when game is updated ===========
##================================================
##==================== csv =======================
##================================================
    
def update_csv(skilltreetable, jobtable, uistring, dnt_list, weapondict, folderDNT, folderCSV):
    ''''''
    for i in dnt_list:
        skillleveltable = folderDNT+i[0]
        skilltable = folderDNT+i[1]
        write_skillinfo_csv(skillleveltable, folderCSV, uistring, skilltable, skilltreetable, jobtable, weapondict)



##================================================
##====== Run this when game is updated ===========
##================================================
##================== skillJS =====================
##================================================
    
def update_skillJS(json_str_dict, folderSKILLJS, folderCSV):
    ''''''
    for i in json_str_dict:
        name1 = "skillinfo_skillleveltable_character" + i + "pve.csv"
        name2 = "skillinfo_changeskill_skillleveltable_character" + i + "pve.csv"
        name3 = i + "_pve"
        output_skillstringJS(folderCSV+name1, folderCSV+name2, name3, folderSKILLJS)
        
        name1 = "skillinfo_skillleveltable_character" + i + "pvp.csv"
        name2 = "skillinfo_changeskill_skillleveltable_character" + i + "pvp.csv"
        name3 = i + "_pvp"
        output_skillstringJS(folderCSV+name1, folderCSV+name2, name3, folderSKILLJS)
        
        
        
##================================================
##====== Run this only if skill trees changed ====
##================================================
##================= json_str =====================
##================================================
## 1. name must be uppercase and second class
## 2. guess no need for both pve and pvp since it's 
##    just for tree slot and skill lvl stuff, not
##    explanation.
## 3. Add exclusive skill to darkavenger.
    
def update_json_str(json_str_dict, class_list, class_dict, exclusive_skills, lvlcap, folderJSON, folderCSV):
    ''''''
    cid_dict = cids(class_list)
    for i in json_str_dict:
        name1 = "skillinfo_skillleveltable_character" + i + "pve.csv"
        for j in json_str_dict[i]:
            output_json_str(folderCSV+name1, j, class_dict, cid_dict, lvlcap, exclusive_skills, folderJSON)


if __name__ == "__main__":
    
    lvlcap = 90
    ver = "versions/ver515/"
    
    print("Current version folder is \n" + ver)
    ans = input("Update version folder? y/n")
    if ans == "y":
        ans = input("Input folder name(verXXX): \n")
        ver = "versions/" + ans + "/"
        if not os.path.exists(ver):
            os.makedirs(ver)
        print("========================")
        print("Update version folder ended.")
        print("========================")
    
    print("======================")
    print("Current level cap is \n" + str(lvlcap))
    ans = input("Update level cap? y/n")
    if ans == "y":
        ans = input("Input level cap: \n")
        lvlcap = int(ans)
        print("========================")
        print("Update level cap ended.")
        print("========================")    
    
    folderCSV = ver+"csv/"
    folderDNT = ver+"dnt/"
    folderJSON = ver+"json_str/"
    folderSKILLJS = ver+"skillJS/"

    folders = [folderCSV,folderDNT,folderJSON,folderSKILLJS]
    
    for folder in folders:
        if not os.path.exists(folder):
            os.makedirs(folder)

    skilltreetable = folderDNT + "skilltreetable.dnt"
    jobtable = folderDNT + "jobtable.dnt"
    playerleveltable = folderDNT+"playerleveltable.dnt"
    uistring = messages(folderDNT+"uistring.xml")
    
    exclusive_skills = [('7521','7522'),('7523','7524'),('7525','7526'),('7527','7528')]
    
    weapondict = {"-1":"", "0":"Greatsword", "1":"Gauntlet", "2":"Axe", "3":"Hammer",
                  "4":"Shortbow", "5":"Bow", "6":"Crossbow", "11":"Mace", "12":"Flail",
                  "13":"Wand", "14":"Shield", "15":"Quiver", "16":"Cannon", "17":"Bubble Blaster",
                  "23":"Dagger", "25":"Spear", "27":"Bracelet", "30":"Knuckle"}
    
    class_list = ['TINKERER', 'ENGINEER', 'ALCHEMIST', 'SHOOTINGSTAR', 'GEARMASTER', 'ADEPT', 'PHYSICIAN', 
                  'ARCHER', 'SHARPSHOOTER', 'ACROBAT', 'SNIPER', 'WARDEN', 'TEMPEST', 'WINDWALKER', 
                  'ASSASSIN', 'SHINOBI', 'TAOIST', 'RAVEN', 'REAPER', 'LIGHTBRINGER', 'ABYSSWALKER', 
                  'CLERIC', 'PALADIN', 'PRIEST', 'GUARDIAN', 'CRUSADER', 'SAINT', 'INQUISITOR', 
                  'KALI', 'SCREAMER', 'DANCER', 'DARKSUMMONER', 'SOULEATER', 'BLADEDANCER', 'SPIRITDANCER', 
                  'LENCEA', 'LANCER', 'DRAGOON', 'VALKYRIE', 
                  'SORCERESS', 'ELEMENTALIST', 'MYSTIC', 'PYROMANCER', 'ICEWITCH', 'WARMAGE', 'CHAOSMAGE', 
                  'WARRIOR', 'SWORDSMAN', 'MERCENARY', 'GLADIATOR', 'LUNARKNIGHT', 'BARBARIAN', 'DESTROYER', 
                  'AVENGER', 'DARKAVENGER',
                  "MACHINA", "PATRONA", "RUINA", "DEFENSIO"
                  ]


    class_dict = {"GEARMASTER":["TINKERER", "ENGINEER", "GEARMASTER"],
                  "SHOOTINGSTAR":["TINKERER", "ENGINEER", "SHOOTINGSTAR"],
                  "ADEPT":["TINKERER", "ALCHEMIST", "ADEPT"],
                  "PHYSICIAN":["TINKERER", "ALCHEMIST", "PHYSICIAN"],
                  "SNIPER":["ARCHER", "SHARPSHOOTER", "SNIPER"],
                  "WARDEN":["ARCHER", "SHARPSHOOTER", "WARDEN"],
                  "TEMPEST":["ARCHER", "ACROBAT", "TEMPEST"],
                  "WINDWALKER":["ARCHER", "ACROBAT", "WINDWALKER"],
                  "RAVEN":["ASSASSIN", "SHINOBI", "RAVEN"],
                  "REAPER":["ASSASSIN", "SHINOBI", "REAPER"],
                  "LIGHTBRINGER":["ASSASSIN", "TAOIST", "LIGHTBRINGER"],
                  "ABYSSWALKER":["ASSASSIN", "TAOIST", "ABYSSWALKER"],
                  "GUARDIAN":["CLERIC", "PALADIN", "GUARDIAN"],
                  "CRUSADER":["CLERIC", "PALADIN", "CRUSADER"],
                  "SAINT":["CLERIC", "PRIEST", "SAINT"],
                  "INQUISITOR":["CLERIC", "PRIEST", "INQUISITOR"],
                  "DARKSUMMONER":["KALI", "SCREAMER", "DARKSUMMONER"],
                  "SOULEATER":["KALI", "SCREAMER", "SOULEATER"],
                  "BLADEDANCER":["KALI", "DANCER", "BLADEDANCER"],
                  "SPIRITDANCER":["KALI", "DANCER", "SPIRITDANCER"],
                  "DRAGOON":["LENCEA", "LANCER", "DRAGOON"],
                  "VALKYRIE":["LENCEA", "LANCER", "VALKYRIE"],
                  "PYROMANCER":["SORCERESS", "ELEMENTALIST", "PYROMANCER"],
                  "ICEWITCH":["SORCERESS", "ELEMENTALIST", "ICEWITCH"],
                  "WARMAGE":["SORCERESS", "MYSTIC", "WARMAGE"],
                  "CHAOSMAGE":["SORCERESS", "MYSTIC", "CHAOSMAGE"],
                  "GLADIATOR":["WARRIOR", "SWORDSMAN", "GLADIATOR"],
                  "LUNARKNIGHT":["WARRIOR", "SWORDSMAN", "LUNARKNIGHT"],
                  "BARBARIAN":["WARRIOR", "MERCENARY", "BARBARIAN"],
                  "DESTROYER":["WARRIOR", "MERCENARY", "DESTROYER"],
                  "DARKAVENGER":["WARRIOR", "AVENGER", "DARKAVENGER"],
                  
                  "RUINA":["MACHINA", "PATRONA", "RUINA"],
                  "DEFENSIO":["MACHINA", "PATRONA", "DEFENSIO"]
                  }    
    
    
    dnt_list = [("skillleveltable_characteracademicpvp.dnt", "skilltable_characteracademic.dnt"),
                ("skillleveltable_characterarcherpvp.dnt", "skilltable_characterarcher.dnt"),
                ("skillleveltable_characterassassinpvp.dnt", "skilltable_characterassassin.dnt"),
                ("skillleveltable_characterclericpvp.dnt", "skilltable_charactercleric.dnt"),
                ("skillleveltable_characterkalipvp.dnt", "skilltable_characterkali.dnt"),
                ("skillleveltable_characterlenceapvp.dnt", "skilltable_characterlencea.dnt"),
                ("skillleveltable_charactersoceresspvp.dnt", "skilltable_charactersoceress.dnt"),
                ("skillleveltable_characterwarriorpvp.dnt", "skilltable_characterwarrior.dnt"),
                    
                ("skillleveltable_characteracademicpve.dnt", "skilltable_characteracademic.dnt"),
                ("skillleveltable_characterarcherpve.dnt", "skilltable_characterarcher.dnt"),
                ("skillleveltable_characterassassinpve.dnt", "skilltable_characterassassin.dnt"),
                ("skillleveltable_characterclericpve.dnt", "skilltable_charactercleric.dnt"),
                ("skillleveltable_characterkalipve.dnt", "skilltable_characterkali.dnt"),
                ("skillleveltable_characterlenceapve.dnt", "skilltable_characterlencea.dnt"),
                ("skillleveltable_charactersoceresspve.dnt", "skilltable_charactersoceress.dnt"),
                ("skillleveltable_characterwarriorpve.dnt", "skilltable_characterwarrior.dnt"),
                
                ("skillleveltable_charactermachinapve.dnt", "skilltable_charactermachina.dnt"),
                ("skillleveltable_charactermachinapvp.dnt", "skilltable_charactermachina.dnt")
                ]
    
    json_str_dict = {"academic" : ["SHOOTINGSTAR", "GEARMASTER", "ADEPT", "PHYSICIAN"],
                     "archer" : ["SNIPER", "WARDEN", "TEMPEST", "WINDWALKER"],
                     "assassin" : ["RAVEN", "REAPER", "LIGHTBRINGER", "ABYSSWALKER"],
                     "cleric" : ["GUARDIAN", "CRUSADER", "SAINT", "INQUISITOR"],
                     "kali" : ["DARKSUMMONER", "SOULEATER", "BLADEDANCER", "SPIRITDANCER"],
                     "lencea" : ["DRAGOON", "VALKYRIE"],
                     "soceress" : ["PYROMANCER", "ICEWITCH", "WARMAGE", "CHAOSMAGE"],
                     "warrior" : ["GLADIATOR", "LUNARKNIGHT", "BARBARIAN", "DESTROYER", "DARKAVENGER"],
                     
                     "machina" : ["RUINA", "DEFENSIO"]
                     }
    
    
    upate(dnt_list, class_list, exclusive_skills, json_str_dict, class_dict, uistring, skilltreetable, jobtable, playerleveltable, weapondict, folderCSV,folderDNT,folderJSON,folderSKILLJS)
    
    
    
    
    
    
    #####################################################################################
    #####################################################################################
    #####################################################################################
    #####################################################################################
    #####################################################################################
    
    
    ##================================================
    ##====== Run this when level cap increases =======
    ##================================================
    ##==================== csv =======================
    ##================================================
    ## 1. Copy the printed information to sim_silveredge.js
    ## 2. increase the lvlcap in write_levelSP_csv
    ## 3. Check playerleveltable to see if the ratio of SP changed
    
    #write_levelSP_csv(playerleveltable, jobtable, lvlcap, folderCSV+"levelSP.csv")
    #print_SP_for_simJS(lvlcap, folderCSV+"levelSP.csv")    
    
    ##================================================
    ##====== Run this when game is updated ===========
    ##================================================
    ##==================== csv =======================
    ##================================================
    
    import time
    tStart = time.time()
    
    for i in dnt_list:
        skillleveltable = folderDNT+i[0]
        skilltable = folderDNT+i[1]
        write_skillinfo_csv(skillleveltable, folderCSV, uistring, skilltable, skilltreetable, jobtable, weapondict)
        
    tEnd = time.time()
    print(tEnd - tStart)

    
    ##================================================
    ##====== Run this when game is updated ===========
    ##================================================
    ##================== skillJS =====================
    ##================================================
    
    #for i in json_str_dict:
        #name1 = "skillinfo_skillleveltable_character" + i + "pve.csv"
        #name2 = "skillinfo_changeskill_skillleveltable_character" + i + "pve.csv"
        #name3 = i + "_pve"
        #output_skillstringJS(folderCSV+name1, folderCSV+name2, name3, folderSKILLJS)
    
        #name1 = "skillinfo_skillleveltable_character" + i + "pvp.csv"
        #name2 = "skillinfo_changeskill_skillleveltable_character" + i + "pvp.csv"
        #name3 = i + "_pvp"
        #output_skillstringJS(folderCSV+name1, folderCSV+name2, name3, folderSKILLJS)

        

    ##================================================
    ##====== Run this only if skill trees changed ====
    ##================================================
    ##================= json_str =====================
    ##================================================
    ## 1. name must be uppercase and second class
    ## 2. guess no need for both pve and pvp since it's 
    ##    just for tree slot and skill lvl stuff, not
    ##    explanation.
    ## 3. Add exclusive skill to darkavenger.
    
    #cid_dict = cids(class_list)
    #for i in json_str_dict:
        #name1 = "skillinfo_skillleveltable_character" + i + "pve.csv"
        #for j in json_str_dict[i]:
            #output_json_str(folderCSV+name1, j, class_dict, cid_dict, lvlcap, exclusive_skills, folderJSON)
            
