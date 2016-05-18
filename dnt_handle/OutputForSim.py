import csv

def print_SP_for_simJS(lvlcap, levelSPcsv="levelSP.csv"):
    '''
    none -> list of int
    
    Return a list of sp for levels read from levelSP.csv(default) in folder.
    Level starts from 0 in sim.js array. (In levelSP.csv level starts from 1)
    
    Print and copy it to sim.js level limits.
    '''
    
    get_sp_by_level = [0]
    get_sp_level_limit = [0]
    get_sp_level_limit2 = [0]
    get_sp_level_limit3 = [0]
    
    with open(levelSPcsv) as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                lvl = int(row["level"])
                sp = int(row["SP"])
                limit = int(row["MaxSPClass0"])
                limit2 = int(row["MaxSPClass1"])
                limit3 = int(row["MaxSPClass2"])

                if lvl > lvlcap:
                    break
                
                get_sp_by_level.append(sp)
                get_sp_level_limit.append(limit)
                get_sp_level_limit2.append(limit2)
                get_sp_level_limit3.append(limit3)
    print("sp_by_level: " + str(get_sp_by_level))
    print("sp_by_level_limit: " + str(get_sp_level_limit))
    print("sp_by_level_limit2: " + str(get_sp_level_limit2))
    print("sp_by_level_limit3: " + str(get_sp_level_limit3))
    