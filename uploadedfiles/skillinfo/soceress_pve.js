var SIM_LableHash = {
	'lvl':'Skill Lv.',
	'MP':'Fee MP',
	'cast':'Skill Type',
	'CD':'Cooldown',
	'lvlup':'Level Up Requirements',
	'effect':'Skill Description',
	'element':'Attribute',
	'weapon':'Required Weapon',
	'nexteffect':'Skill Description (Next Level)'
};

SIM_AddSkill({
	"2403": {
		name: "Gravity Blast",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Shoots an orb of gravity the pierces enemies and explodes, dealing damage. <br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '836', '865', '894', '923', '952', '1190', '1219', '1248', '1277', '1307', '1544', '1573', '1602', '1632', '1661', '1898', '1927', '1957', '1986', '2015', '2253']
		}
	},
	"2365": {
		name: "Frost Chaos (Burst)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "얼음 가시를 사방으로 내뿜는 얼음구를 소환한다. 적중당한 적은 동상에 걸린다.<br><color_y>얼음 가시하나당 공격력{t5}%<br><br>[동상]<br>행동속도 {t6}초동안 {t7}% 감소</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '85', '88', '91', '94', '97', '116', '119', '123', '126', '130', '149', '153', '156'],
			'{t6}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2309": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Fireball EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Flame Spark</color_y><color_w> or </color_w><color_y>Phoenix Strike</color_y><color_w>, </color_w><color_y>Fireball EX</color_y><color_w> temporarily becomes an instant skill and can deal third-tier damage. When </color_w><color_y>Phoenix Strike</color_y><color_w> hits, restore </color_w><color_y>Fireball EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Fireball and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '5']
		}
	},
	"2504": {
		name: "Nine Tail Laser EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Linear Ray EX Lv. 1<br>Nine Tail Laser Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Nine Tail Laser's explosion range and number of laser shots.<br><color_y>Nine Tail Laser Damage: +{t5}%<br>Critical Resist: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"2302": {
		name: "Fireball EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fireball Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Fireball's max charge damage. Press the special attack button to split the flame into three separate blasts. Causes Burn.<br><color_y>Fireball Max Charge Damage: +{t5}%<br>Damage per Projectile (2nd part): {t6}%<br>Damage per Projectile (3rd part): {t7}%<br>Burn Attacks: {t8}<br>Damage per Burn: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '40'],
			'{t6}': [null, '50'],
			'{t7}': [null, '96'],
			'{t8}': [null, '5'],
			'{t9}': [null, '5']
		}
	},
	"2207": {
		name: "Phoenix Strike",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Summons fiery birds that soar forward, damaging enemies by setting them on fire.<br><color_y>Fire Magic<br>Damage per Bird: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%<br>Elemental Resistance: -{t8}%<br>Duration: {t9} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '92', '99', '103', '108', '112', '127', '132', '136', '140', '144', '160', '164', '168'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"2406": {
		name: "Linear Ray",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Shoots forth a powerful ray of light. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '896', '921', '946', '972', '997', '1203', '1228', '1253', '1279', '1304', '1510', '1535', '1561', '1586', '1611', '1817', '1842', '1868', '1893', '1918', '2124']
		}
	},
	"2351": {
		name: "Ice Barrier",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frozen Fury Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Creates an ice barrier to protect you. When the barrier is destroyed or expires, it explodes to freeze nearby enemies.<br><color_y>Barrier Health: {t5}% of Damage<br></color_y><color_y>Time Limit: {t6} sec<br>Freeze Range: {t7}m<br>Freeze Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '195'],
			'{t6}': [null, '17'],
			'{t7}': [null, '2'],
			'{t8}': [null, '2.5']
		}
	},
	"2214": {
		name: "Ice Shield",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frozen Spikes Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a shield of ice to absorb damage and boost your Super Armor. Inflict frostbite on nearby enemies.<br><color_y>Ice Magic<br>Physical Damage Taken: -{t5}%<br>Magic Damage Taken: -{t6}%<br>Super Armor +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '10000'],
			'{t8}': [null, '20']
		}
	},
	"2029": {
		name: "Charged Missile",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Hold down the attack button for 1.5 seconds to charge this skill. You will then launch a piercing missile that thrusts the target back. This skill reaches further than your normal attacks by 2m. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '70', '74', '79', '83', '87', '112', '115', '118', '121', '124', '146', '149', '152', '155', '158', '179', '182']
		}
	},
	"2560": {
		name: "Triple Orbs EX Instant",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Triple Orbs can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2219": {
		name: "Mana Surge",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Grants a <color_y>{t5}%</color_y><color_w> chance to gain back </color_w><color_y>{t6}%</color_y><color_w> of the MP cost of a skill.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '90']
		}
	},
	"2362": {
		name: "Glacial Freeze (Burst)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Instantly freezes nearby enemies and inflicts frostbite on the targets.<br><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed: -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '718', '752', '786', '820', '854', '964', '998', '1032', '1066', '1100', '1209', '1243', '1277'],
			'{t6}': [null, '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8', '8'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2369": {
		name: "Ice Cold Field EX Instant",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Ice Cold Field is effective over a wide range.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2024": {
		name: "Aerial Evasion",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "When launched into the air, press the <color_y>[Jump]</color_y><color_w> key to land on your feet.<br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18'],
			'{t3}': ['14'],
			'{t4}': ['5'],
			'{t5}': [null, '18']
		}
	},
	"2204": {
		name: "Icy Shards",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Summons sharp ice blades to damage and launch enemies. The target suffers from <color_y>Frostbite</color_y><color_w>. <br></color_w><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '600', '615', '631', '646', '661', '787', '803', '818', '834', '849', '975', '990', '1006', '1021', '1037', '1163', '1178', '1193', '1209', '1224', '1350'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2211": {
		name: "Frozen Spikes",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Cold Field Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Creates a huge spike trap that continuously deals damage and causes <color_y>Frostbite</color_y><color_w> on any targets in the area.<br></color_w><color_y>Ice Magic<br>Damage per Hit: {t5}%<br><br>(Frostbite)<br>Action Speed -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '178', '182', '187', '191', '196', '234', '238', '243', '248', '252', '290', '295', '299', '304', '308', '346', '351', '355'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2038": {
		name: "Attuned Mind",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mental Fortitude Lv. 1<br>SP {t4}",
			'effect': "MP recovery every 2 sec: <color_y>{t5} </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['30', '40', '50', '60', '70'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '100', '150', '200', '250']
		}
	},
	"2213": {
		name: "Fire Shield",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fire Wall Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a shield of fire to absorb damage and boost your Super Armor. Burns nearby enemies.<br><color_y>Fire Magic<br>Physical Damage Taken: -{t5}%<br>Magic Damage Taken: -{t6}%<br>Super Armor +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '10000'],
			'{t8}': [null, '20']
		}
	},
	"2556": {
		name: "Gravity Crush EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gravity Crush Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Gravity Crush's attack range. Also allows you to move around more freely while using the skill. Causes a huge explosion at the end, decreasing enemy Elemental Resistance.<br><color_y>Gravity Crush Damage: +{t5}%<br>Enemy Elemental Resistance: -{t6}% for {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"2301": {
		name: "Burning Hand",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Volcanic Vortex Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Fire</color_y><color_w> attacks gain a chance to deal extra damage to </color_w><color_y>Burned</color_y><color_w> enemies.<br></color_w><color_y>Damage: +{t5}%<br>Trigger Chance: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '100'],
			'{t6}': [null, '20']
		}
	},
	"2012": {
		name: "Blink",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the same direction key twice to dodge in that direction. You can also press [Shift] and a direction key simultaneously to dodge in that direction.<br><color_y>Grants invincibility for {t5} sec when the skill is used.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2.6', '2.6'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '0.6']
		}
	},
	"2205": {
		name: "Hot Rod",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fire Shield Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "You sweep forward, leaving a trail of fire behind you.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Enemies only take {t7}% damage after hit {t6}.<br>Tumble to cancel the skill.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '511', '532', '552', '572', '593', '702', '722', '742', '763', '783', '892', '912', '933', '953', '973'],
			'{t6}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"2555": {
		name: "Black Hole EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Black Hole Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Black Hole's attack range and suction speed. Causes a huge explosion at the end.<br><color_y>Black Hole Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"2414": {
		name: "Beam Tempest",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spectrum Ray Lv. 1<br>Sorceress SP Total 45 or above<br>SP {t4}",
			'effect': "Fire a large array of powerful lasers at enemies. A magic sphere protects you while you channel this spell. <br><color_y>Damage: {t5}%<br>Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '7625', '9198'],
			'{t6}': [null, '75', '75'],
			'{t7}': [null, '75', '75']
		}
	},
	"2303": {
		name: "Magma Ball",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Burning Hand Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Pumps molten lava from the ground, creates a magma ball, and sends it rolling forward. The magma will explode after a certain distance, inflicting significant damage.<br><color_y>Fire Magic<br></color_y><color_y>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2450', '2517', '2584', '2651', '2718', '3078', '3145', '3212', '3279', '3346', '3706', '3773', '3840'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2505": {
		name: "Force Mirror EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Force Mirror Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Force Mirror, increasing casting speed and dealing more damage. The range of magic damage increases by {t5} times.<br><color_y>Damage per Mirror: {t6}% of Damage<br>Attack Range: {t7}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '130'],
			'{t7}': [null, '7']
		}
	},
	"2552": {
		name: "Gravity Ball EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gravity Blast Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Gravity Ball so that it explodes three times in a row, increasing its range each time.<br><color_y>Gravity Ball Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '40']
		}
	},
	"2220": {
		name: "Fireball",
		changeskill: "2310",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Gather and charge a highly explosive fireball. Charge for at least 1.3 seconds to inflict up to {t5} times the original damage. <br><color_y>Fire Magic<br>Damage: {t6}%<br></color_y><color_w>Stage 1:</color_w><color_y>{t7}%</color_y><color_w>, Stage 2:</color_w><color_y>{t8}%</color_y><color_w>, Stage 3:</color_w><color_y>{t9}%</color_y><color_w></color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '843', '858', '873', '888', '903', '1025', '1040', '1055', '1070', '1085', '1207', '1222', '1237', '1252', '1267', '1389', '1404', '1419', '1434', '1449', '1571'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150'],
			'{t9}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"2002": {
		name: "Fire Burst",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Shoots a burst of flame in front of you. You control the direction of the attack. Effective against knocked down enemies. <br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '113', '115', '117', '119', '122', '140', '142', '144', '146', '148', '166', '168', '171', '173', '175', '193', '195', '197', '200', '202', '220', '222', '224', '226', '229', '247', '249', '251', '253'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2558": {
		name: "Gravity Well EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gravity Well Lv. 1<br>SP {t4}",
			'effect': "Enhances Gravity Well to launch enemies higher into the air or strike enemies to the ground.<br><color_y>Left-click: Strike to the ground<br></color_y><color_y>Bonus Damage: {t5}%<br></color_y><color_y>Right-click: Launch higher into the air<br></color_y><color_w>When striking or launching enemies into the air: </color_w><color_y>Bonus Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '80']
		}
	},
	"2420": {
		name: "Nine Tail Laser",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Force Shield Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Shoots 9 lasers that fly over to the target that is {t5}m away.<br>Damage: {t6}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t6}': [null, '1704', '1737', '1771', '1804', '1837', '2107', '2141', '2174', '2207', '2240', '2510', '2544', '2577', '2610', '2643', '2914', '2947', '2980']
		}
	},
	"2559": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Triple Orbs EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Gravity Spark</color_y><color_w>, </color_w><color_y>Triple Orbs EX</color_y><color_w> temporarily becomes an instant skill and summons all orbs at once. When </color_w><color_y>Gravity Spark</color_y><color_w> hits, restore </color_w><color_y>Triple Orbs EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Triple Orbs Sweep and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '16'],
			'{t6}': [null, '5']
		}
	},
	"2210": {
		name: "Chilling Mist",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Shield Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Summons a cloud of mist to deal damage. The target suffers from <color_y>Frostbite</color_y><color_w>. <br></color_w><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1302', '1349', '1397', '1445', '1493', '1748', '1796', '1844', '1891', '1939', '2194', '2242', '2290', '2338', '2385'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2508": {
		name: "Laser Cutter EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Laser Cutter Lv. 1<br>SP {t4}",
			'effect': "Summons a laser that will explode and return to you.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '']
		}
	},
	"2023": {
		name: "Power Blink",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blink Lv. 1<br>SP {t4}",
			'effect': "Allows you to evade enemy attacks using <color_y>[Blink]</color_y><color_w> even when paralyzed.<br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['20'],
			'{t4}': ['5'],
			'{t5}': [null, '20']
		}
	},
	"2308": {
		name: "Magma Ball EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Magma Ball Lv. 1<br>SP {t4}",
			'effect': "Allows you to briefly control the summoned ball of magma. <color_y>Left-click</color_y><color_w> to shoot it. The ball will be shot automatically if you do not fire it after a certain amount of time.<br></color_w><color_y>Bonus Explosion Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"2354": {
		name: "Ice Cold Field EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Icy Shards EX Lv. 1<br>Ice Cold Field Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Ice Cold Field's attack range and damage.<br><color_y>Ice Cold Field Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"2501": {
		name: "Arcane Overdrive",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beam Tempest Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Burn more MP to squeeze more damage from your spells.<br><color_y>Damage: +{t5}%<br>MP Cost: {t6}x<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '16'],
			'{t6}': [null, '1.1'],
			'{t7}': [null, '180']
		}
	},
	"2412": {
		name: "Time Stop",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Stops time in the area around you, forcing nearby enemies to stop moving. <br><color_y>Duration: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40'],
			'{t3}': ['26', '36', '46', '56', '66'],
			'{t4}': ['3', '1', '1', '1', '1'],
			'{t5}': [null, '6', '8', '10', '12', '14']
		}
	},
	"2206": {
		name: "Inferno",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fireball Lv. 1<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Discharges fireball forward.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Range: {t6}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '909', '932', '954', '977', '1000', '1186', '1208', '1231', '1254', '1277', '1462', '1485', '1508', '1531', '1553', '1739', '1762', '1784', '1807', '1830'],
			'{t6}': [null, '5', '5', '5', '5', '5', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"2016": {
		name: "Air Strike",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while jumping to strike an enemy with your off-hand weapon. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"2039": {
		name: "Mana Flow",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Grants a buff that decreases the {t5} consumed by you and your allies by {t6}% when using skills. <br><color_y>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['34'],
			'{t4}': ['0'],
			'{t5}': [null, 'MP'],
			'{t6}': [null, '20'],
			'{t7}': [null, '300']
		}
	},
	"2408": {
		name: "Summon Comet",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Black Hole Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "A portal opens, summoning forth a powerful comet. <br><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1155', '1229', '1302', '1376', '1449', '1795', '1868', '1942', '2015', '2089', '2434', '2508', '2581', '2655', '2728', '3074', '3147']
		}
	},
	"2402": {
		name: "Meteor Storm",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gravity Crush Lv. 1<br>Sorceress SP Total 45 or above<br>SP {t4}",
			'effect': "Summons a portal that rains meteors on the land. A protective sphere shields you from enemies during this spell.<br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '11562', '13982']
		}
	},
	"2411": {
		name: "Gravity Trap",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blink Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a magic pentacle that decreases the Action Speed of those who step on it by {t5}%. <br><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t6}': [null, '121', '127', '132', '137', '143', '167', '172', '177', '183', '188', '212', '217', '223']
		}
	},
	"2361": {
		name: "Glacial Spike (Burst)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires an icy spike that has a chance to inflict frostbite.<br><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed: -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '245', '251', '257', '263', '269', '305', '311', '317', '323', '329', '366', '372', '378', '384', '390', '426', '432', '438', '444', '450', '487', '493', '499', '505', '511', '547', '553', '559', '565'],
			'{t6}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2557": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Black Hole, Gravity Crush, and Gravity Well</color_y><color_w> and deals extra damage to enemies who resist being held by gravity attacks.<br></color_w><color_y>Damage +{t5}% per hit</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '30']
		}
	},
	"2208": {
		name: "Ignite",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phoenix Strike Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Uses nearby enemies as kindling, setting them aflame. <br><color_y>Fire Magic<br>Damage: {t5}%<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '17.4', '16.8', '16.2', '15.6', '14.9', '14.3', '13.7', '13.1', '12.5', '11.8', '11.2', '10.6', '10', '10', '10'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '312', '325', '337', '349', '361', '426', '438', '450', '462', '474', '539', '551', '563', '575', '587', '652'],
			'{t6}': [null, '18', '17.4', '16.8', '16.2', '15.6', '14.9', '14.3', '13.7', '13.1', '12.5', '11.8', '11.2', '10.6', '10', '10', '10']
		}
	},
	"2217": {
		name: "Flame Spark",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Press the attack button during a <color_y>Blink</color_y><color_w> to shoot a burst of flame.<br></color_w><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '151', '161', '171', '182', '192', '226', '236', '247', '257', '267', '301', '311', '322'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2506": {
		name: "Spectrum Ray EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spectrum Ray Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Decreases Spectrum Ray's casting time. An additional laser that's half as strong will launch an attack in the shape of concentric circles. Increases explosion damage.<br><color_y>Spectrum Ray Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '60']
		}
	},
	"2037": {
		name: "Mental Fortitude",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'MP', 'MP', 'MP', 'MP', 'MP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"2410": {
		name: "Force Mirror",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nine Tail Laser Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Set up an unbreakable barrier to protect you and weaken all the defenses of nearby enemies.<br><color_y>Summon Duration: {t5} sec<br></color_y><color_y>Debuff Duration: {t6} sec<br>Damage Taken +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '12'],
			'{t6}': [null, '12'],
			'{t7}': [null, '20']
		}
	},
	"2419": {
		name: "Mana Surge",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Attuned Mind Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Grants a <color_y>{t5}%</color_y><color_w> chance to gain back </color_w><color_y>{t6}%</color_y><color_w> of the MP cost of a skill.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '90']
		}
	},
	"2417": {
		name: "Dark Nova",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "After you <color_y>Blink</color_y><color_w>, use a special attack to blast a wave of magical energy to nearby enemies. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '97', '103', '112', '120', '128', '164', '172', '180', '189', '197', '232', '241', '249']
		}
	},
	"2355": {
		name: "Frozen Spikes EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frozen Spikes Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Frozen Spikes’s attack range. Each ice patch deals full damage.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"2353": {
		name: "Frost Chaos",
		changeskill: "2365",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Barrier Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a ball of ice that shoots icy spears in all directions. It has a chance to freeze enemies.<br><color_y>Damage per Ice Spike: {t5}%<br>Chance to Freeze: {t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '21', '22', '23', '24', '24', '28', '29', '30', '31', '31', '35', '36', '37'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']
		}
	},
	"2215": {
		name: "Volcanic Vortex",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hot Rod Lv. 1<br>Sorceress SP Total 45 or above<br>SP {t4}",
			'effect': "Summons a vortex of pure volcanic energy to Burn enemies. Surrounds you with a shield of fire while you channel this spell. <br><color_y>Fire Magic<br>Damage: {t5}%<br>Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%<br>Burn Attacks: {t8}<br>Damage per Burn: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['150', '150', '150'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '3845', '4636'],
			'{t6}': [null, '70', '70'],
			'{t7}': [null, '70', '70'],
			'{t8}': [null, '5', '5'],
			'{t9}': [null, '5', '5']
		}
	},
	"2551": {
		name: "Mystic Mischief",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Meteor Storm Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Increases your <color_y>Dark Attack</color_y><color_w> and steals an enemy's buffs, applying them to you. Cannot steal buffs that affect weapons.<br></color_w><color_y>Dark Attack +{t5}% <br>Duration: {t6} sec<br>Buffs Stolen: {t7}<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '180'],
			'{t7}': [null, '1'],
			'{t8}': [null, '60']
		}
	},
	"2413": {
		name: "Force Shield",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Linear Ray Lv. 1<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Surrounds you with a barrier that occasionally absorbs incoming damage. Increases your Damage while the barrier is active. <br><color_y>Chance to Activate: {t5}%<br></color_y><color_y>Duration: {t6} sec<br>Physical Damage Taken: -{t7}%<br>Magic Damage Taken: -{t8}% <br>Damage: +{t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['21', '21'],
			'{t3}': ['18'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '24'],
			'{t8}': [null, '24'],
			'{t9}': [null, '40']
		}
	},
	"2033": {
		name: "Shock Wave",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Uses magical force to push away nearby enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '112', '116', '120', '124', '128', '149', '152', '156', '160', '164', '185', '188', '192', '196', '200', '221', '224', '228', '232', '236', '257', '260', '264', '268', '272']
		}
	},
	"2221": {
		name: "Hellfire",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Critical Chance will increase when you fortify your fire attack to inflict damage onto enemies with the Burn status.<br><color_y>Critical {t5}%+{t6}<br>Additional Damage {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['38'],
			'{t4}': ['0'],
			'{t5}': [null, '20'],
			'{t6}': [null, '5000'],
			'{t7}': [null, '30']
		}
	},
	"2306": {
		name: "Hot Rod EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hot Rod Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Creates an explosion where Hot Rod was cast. Also enhances Hot Rod to cause Burn. Lifts the restriction on the <color_y>number of hits</color_y><color_w>.<br></color_w><color_y>Damage per Explosion: {t5}% of Hot Rod damage<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%<br>Tumble to cancel the skill while casting it.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"2035": {
		name: "Void Blast",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 480%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 492%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 504%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 515%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 527%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 623%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 635%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 647%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 659%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 671%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1061%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1076%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1092%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1107%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1123%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1248%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1263%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1279%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1294%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1309%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1435%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1450%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1465%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1481%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1496%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1621%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 1637%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>']		}
	},
	"2503": {
		name: "Laser Cutter",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Arcane Overdrive Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Blast the ground with an orbital laser. The laser trajectory will slowly burn across the ground in front of you. It will explode and disappear if it reaches the end or touches a wall, and Laser Cutter immediately deals 50% damage.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3546', '3664', '3781', '3898', '4016', '4567', '4685', '4802', '4919', '5037', '5588', '5706', '5823']
		}
	},
	"2216": {
		name: "Frozen Fury",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chilling Mist Lv. 1<br>Sorceress SP Total 45 or above<br>SP {t4}",
			'effect': "Creates a powerful blizzard to inflict frostbite on nearby enemies.<br><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed: -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['150', '150', '150'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '6755', '8169'],
			'{t6}': [null, '5', '5'],
			'{t7}': [null, '30', '30']
		}
	},
	"2415": {
		name: "Fast Forward",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Distorts time, increasing your cooldown recovery speed.<br><color_y>Duration: {t5} sec<br>Cooldown Speed: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['120', '120'],
			'{t3}': ['34'],
			'{t4}': ['10'],
			'{t5}': [null, '15.0'],
			'{t6}': [null, '80']
		}
	},
	"2034": {
		name: "Glacial Spike",
		changeskill: "2361",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires an icy spike that has a chance to inflict frostbite.<br><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed: -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '77', '79', '81', '83', '85', '98', '101', '103', '106', '109', '127', '130', '133', '135', '138', '156', '159', '162', '164', '167', '185', '188', '191', '193', '196', '214', '217', '220', '223'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2401": {
		name: "Gravity Crush",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Summon Comet Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Crushes enemies in range with a powerful gravitational force for 3 seconds. This affects your movement as well.  <br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1612', '1691', '1769', '1847', '1925', '2344', '2422', '2500', '2579', '2657', '3075', '3153', '3232', '3310', '3388']
		}
	},
	"2218": {
		name: "Icy Gust",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Press the special attack button during a <color_y>Blink</color_y><color_w> to gather and release an icy gust, decreasing enemy Movement Speed. <br></color_w><color_y>Ice Magic<br>Damage: {t5}%<br>Action Speed: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '113', '120', '127', '134', '141', '183', '190', '197', '204', '211', '253', '260', '267'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2036": {
		name: "Health Bolster",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'HP', 'HP', 'HP', 'HP', 'HP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"2305": {
		name: "Fire Wall EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fire Wall Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "While using Fire Wall, press the regular attack button to throw a flame in front. Also enhances Fire Wall to cause Burn. <br><color_y>Additional Hit Damage: {t5} - {t6}% of Fire Wall damage<br>Burn Attacks: {t7}<br>Damage per Burn: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '60'],
			'{t7}': [null, '5'],
			'{t8}': [null, '5']
		}
	},
	"2022": {
		name: "Rising Blast",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "When knocked down, press the attack button to blast away enemies in range. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"2013": {
		name: "Witch Slap",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button to attack with your secondary weapon. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"2014": {
		name: "Knee Jerk",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button next to a stunned enemy to launch the enemy back with a kick. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['8'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"2356": {
		name: "Chilling Mist EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chilling Mist Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Chilling Mist's damage and range. Press the regular attack button in the middle of the skill to deal additional hits.<br><color_y>Chilling Mist Damage: +{t5}%<br>Additional Hit Damage: {t6}% of Regular Chilling Mist Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '100'],
			'{t6}': [null, '30']
		}
	},
	"2404": {
		name: "Triple Orbs",
		changeskill: "2560",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gravity Blast Lv. 1<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Summons three void orbs that deal massive damage. <br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '777', '794', '811', '829', '846', '986', '1003', '1020', '1037', '1055', '1195', '1212', '1229', '1246', '1264', '1404', '1421', '1438', '1455', '1472', '1612']
		}
	},
	"2554": {
		name: "Triple Orbs EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Triple Orbs Lv. 1<br>Gravity Ball EX Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Triple Orbs's attack range and knocks enemies down. Causes a huge explosion at the end.<br><color_y>Triple Orbs Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"2405": {
		name: "Black Hole",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Triple Orbs Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "A black hole forms 7m in front of you and sucks in nearby targets. <br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1990', '2059', '2129', '2198', '2267', '2337', '2406', '2475', '2544', '2614', '2683', '2752', '2822', '2891', '2960', '3030', '3099', '3168']
		}
	},
	"2202": {
		name: "Fire Wall",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inferno Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a wave of fire that has a chance to burn enemies.<br><color_y>Fire Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29', '29'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '718', '737', '755', '774', '792', '942', '960', '978', '997', '1015', '1165', '1183', '1202', '1220', '1238', '1388', '1406', '1425']
		}
	},
	"2409": {
		name: "Teleport",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blink Lv. 1<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Teleports you to a dimensional portal summoned far ahead of you. <br><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '14', '13', '12', '11', '10', '9'],
			'{t3}': ['16', '26', '36', '46', '56', '66', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '15', '14', '13', '12', '11', '10', '9']
		}
	},
	"2553": {
		name: "Gravity Well",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mystic Mischief Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Launches nearby enemies into the air and smashes them back down to the ground. Additional damage is dealt to the enemy with the lowest HP.<br><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%<br>Additional Damage to Enemy with Lowest HP: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '863', '883', '903', '923', '943', '1050', '1070', '1090', '1110', '1130', '1237', '1257', '1277'],
			'{t6}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150']
		}
	},
	"2203": {
		name: "Ice Cold Field",
		changeskill: "2369",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Icy Shards Lv. 1<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Transforms the area 4m in front of you into a treacherous field of ice. The target suffers from <color_y>Frostbite</color_y><color_w>. <br></color_w><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '816', '841', '865', '890', '915', '1115', '1140', '1165', '1189', '1214', '1415', '1439', '1464', '1489', '1513', '1714', '1739', '1763', '1788', '1813'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2310": {
		name: "Fireball EX Instant",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Third-tier Fireball can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2031": {
		name: "Wheeling Staff",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 191%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 215%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 240%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 264%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 288%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 400%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 424%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 448%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 473%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 497%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 839%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 871%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 903%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 934%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 966%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 1110%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 1142%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 1174%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>']		}
	},
	"2026": {
		name: "Toxic Spray",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Sprays 2 bursts of toxic poison that explode on contact. Works on knocked down enemies.<br><color_y>Dark Magic<br>Damage per Projectile: {t5}%<br>Poison Attacks: {t6}<br>Damage per Poison: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['3', '8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '89', '94', '99', '120', '145', '220', '245', '270', '295', '321', '396', '421', '446', '471', '496', '571', '596', '621'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2416": {
		name: "Gravity Spark",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Attack after a <color_y>Blink</color_y><color_w> to shoot gravity at enemies. <br></color_w><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '71', '74', '77', '80', '83', '113', '115', '117', '119', '121', '146', '148', '150', '152', '154', '179', '181', '183', '185', '187']
		}
	},
	"2304": {
		name: "Inferno EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inferno Lv. 1<br>Fireball EX Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Inferno's attack range. Finish casting the skill or press the regular attack button to trigger an explosion that damages enemies and decreases their Critical Resist. Also causes Burn.<br><color_y>Explosion Damage: {t5}% of Inferno damage<br>Enemy Critical Resist: -{t6}% for {t7} sec<br>Burn Attacks: {t8}<br>Damage per Burn: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '40'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10'],
			'{t8}': [null, '5'],
			'{t9}': [null, '5']
		}
	},
	"2352": {
		name: "Icy Shards EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Icy Shards Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a gigantic ice blade. Enhances the attack range and damage of Icy Shards.<br><color_y>Icy Shards Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"2212": {
		name: "Shatter",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Glacial Freeze Lv. 1<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Shatters frozen/frostbitten enemies, decreasing their Action Speed for 7 seconds. <br><color_y>Ice Magic<br>Damage: {t5}%<br>Action Speed: -{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '355', '371', '387', '402', '418', '502', '518', '534', '549', '565', '649', '665', '681', '696', '712', '796'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"2368": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Cold Field EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Icy Gust</color_y><color_w>, </color_w><color_y>Ice Cold Field EX</color_y><color_w> temporarily becomes an instant skill and hits a wide area around you. When </color_w><color_y>Icy Gust</color_y><color_w> hits, restore </color_w><color_y>Ice Cold Field EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage Taken: -{t6}%<br>Damage: +{t7}% <br>Ice Cold Field and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5']
		}
	},
	"2407": {
		name: "Spectrum Ray",
		changeskill: "2510",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Force Mirror Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Calls forth a laser orb overhead that shoots lasers at enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1452', '1521', '1590', '1659', '1727', '2050', '2119', '2188', '2256', '2325', '2648', '2717', '2785', '2854', '2923']
		}
	},
	"2418": {
		name: "Time Dodge",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 35 or above<br>SP {t4}",
			'effect': "Press the regular attack button when an enemy strikes to dodge the blow and freeze that enemy in time for <color_y>{t5} seconds</color_y><color_w>. Does not work in the air or during knockdown.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5']
		}
	},
	"2509": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Spectrum Ray EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Dark Nova</color_y><color_w> or </color_w><color_y>Spectrum Ray EX</color_y><color_w>, </color_w><color_y>Spectrum Ray EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Spectrum Ray EX</color_y><color_w> hits, restore </color_w><color_y>Spectrum Ray EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Spectrum Ray and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '25'],
			'{t6}': [null, '5']
		}
	},
	"2357": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Ice Damage by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '20']
		}
	},
	"2510": {
		name: "Spectrum Ray EX Instant",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Spectrum Ray can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2015": {
		name: "Stiletto Dance",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press special attack near a knocked down enemy to stomp on them. Move to cancel the skill. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '135']
		}
	},
	"2209": {
		name: "Glacial Freeze",
		changeskill: "2362",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Instantly freezes nearby enemies and inflicts frostbite on the targets.<br><color_y>Ice Magic<br>Damage: {t5}%<br><br>(Frostbite)<br>Action Speed: -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '187', '196', '205', '214', '222', '251', '259', '268', '277', '286', '314', '323', '332'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Quickly recovers War Mage cooldown by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10']
		}
	},
	"2502": {
		name: "Linear Ray EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Linear Ray Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Linear Ray. Charge the skill, then press the regular attack button to increase Linear Ray's damage and range. <br><color_y>Linear Ray Range Increase: {t5} - {t6}<br>Linear Ray Damage Increase: {t7} - {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '1'],
			'{t6}': [null, '2'],
			'{t7}': [null, '50'],
			'{t8}': [null, '80']
		}
	},
	"2307": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Fire Damage by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '20']
		}
	},
	"2358": {
		name: "Ice Barrier EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Barrier Lv. 1<br>SP {t4}",
			'effect': "Enhances Ice Barrier. Increases Ice Attack by <color_y>{t5}</color_y><color_w>% when the shield expires. Use the skill again within </color_w><color_y>{t6} seconds</color_y><color_w> to increase Ice Attack by an additional </color_w><color_y>{t7}</color_y><color_w>%, but at the expense of your shield. <br></color_w><color_y>Ice Attack Boost Duration: {t8} seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '10'],
			'{t6}': [null, '5'],
			'{t7}': [null, '20'],
			'{t8}': [null, '50']
		}
	}
});