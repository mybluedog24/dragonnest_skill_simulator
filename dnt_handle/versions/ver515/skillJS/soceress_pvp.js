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
		name: "Gravity Blast (PVP)",
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
			'{t5}': [null, '109', '112', '115', '117', '124', '148', '169', '178', '188', '241', '310', '345', '369', '393', '418', '525', '532', '539', '547', '555', '644']
		}
	},
	"2365": {
		name: "Frost Chaos (Burst) (PVP)",
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
			'{t5}': [null, '16', '17', '18', '19', '20', '25', '25', '26', '27', '28', '30', '31', '33'],
			'{t6}': [null, '1.5', '1.75', '2', '2.25', '2.5', '2.75', '3', '3.25', '3.5', '3.75', '4', '4.25', '4.5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2309": {
		name: "Class Mastery II (PVP)",
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
		name: "Nine Tail Laser EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"2302": {
		name: "Fireball EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fireball Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Fireball's max charge damage. Press the special attack button to split the flame into three separate blasts. <br><color_y>Fireball Max Charge Damage: +{t5}%<br>Damage per Projectile (2nd part): {t6}%<br>Damage per Projectile (3rd part): {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '20'],
			'{t6}': [null, '25'],
			'{t7}': [null, '50']
		}
	},
	"2207": {
		name: "Phoenix Strike (PVP)",
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
			'{t5}': [null, '58', '64', '68', '76', '82', '116', '128', '138', '149', '155', '190', '197', '204'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"2406": {
		name: "Linear Ray (PVP)",
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
			'{t5}': [null, '124', '126', '129', '132', '140', '163', '186', '195', '206', '263', '337', '374', '401', '428', '456', '573', '584', '596', '608', '621', '722']
		}
	},
	"2351": {
		name: "Ice Barrier (PVP)",
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
			'{t5}': [null, '136'],
			'{t6}': [null, '17'],
			'{t7}': [null, '2'],
			'{t8}': [null, '2.5']
		}
	},
	"2214": {
		name: "Ice Shield (PVP)",
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
			'{t5}': [null, '20'],
			'{t6}': [null, '20'],
			'{t7}': [null, '50'],
			'{t8}': [null, '20']
		}
	},
	"2029": {
		name: "Charged Missile (PVP)",
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
			'{t5}': [null, '22', '23', '25', '26', '29', '42', '45', '55', '61', '66', '88', '92', '95', '97', '99', '120', '123']
		}
	},
	"2560": {
		name: "Triple Orbs EX Instant (PVP)",
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
		name: "Mana Surge (PVP)",
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
		name: "Glacial Freeze (Burst) (PVP)",
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
			'{t5}': [null, '62', '67', '71', '79', '85', '115', '128', '139', '150', '156', '182', '189', '196'],
			'{t6}': [null, '1.5', '1.75', '2', '2.25', '2.5', '2.75', '3', '3.25', '3.5', '3.75', '4', '4', '4'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2369": {
		name: "Ice Cold Field EX Instant (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2024": {
		name: "Aerial Evasion (PVP)",
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
		name: "Icy Shards (PVP)",
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
			'{t5}': [null, '107', '109', '112', '114', '122', '141', '166', '175', '186', '248', '323', '364', '391', '420', '449', '568', '575', '583', '591', '599', '698'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2211": {
		name: "Frozen Spikes (PVP)",
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
			'{t5}': [null, '62', '64', '65', '70', '72', '85', '100', '105', '113', '119', '143', '150', '157', '159', '161', '184', '186', '188'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2038": {
		name: "Attuned Mind (PVP)",
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
		name: "Fire Shield (PVP)",
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
			'{t5}': [null, '20'],
			'{t6}': [null, '20'],
			'{t7}': [null, '50'],
			'{t8}': [null, '20']
		}
	},
	"2556": {
		name: "Gravity Crush EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"2301": {
		name: "Burning Hand (PVP)",
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
			'{t5}': [null, '70'],
			'{t6}': [null, '20']
		}
	},
	"2012": {
		name: "Blink (PVP)",
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
		name: "Hot Rod (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fire Shield Lv. 1<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "You sweep forward, leaving a trail of fire behind you that burns enemies.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%<br>Enemies only take {t9}% damage after hit {t8}.<br>Tumble to cancel the skill.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52', '52'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '171', '187', '196', '225', '238', '299', '316', '334', '352', '370', '438', '449', '461', '472', '485'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t9}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"2555": {
		name: "Black Hole EX (PVP)",
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
		name: "Beam Tempest (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1042', '1231'],
			'{t6}': [null, '75', '75'],
			'{t7}': [null, '75', '75']
		}
	},
	"2303": {
		name: "Magma Ball (PVP)",
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
			'{t2}': ['47', '47', '47', '47', '47', '47', '47', '47', '47', '47', '47', '47', '47', '47'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '624', '669', '716', '765', '792', '962', '982', '1004', '1027', '1052', '1146', '1199', '1251'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2505": {
		name: "Force Mirror EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Force Mirror Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances your Force Mirror to be summoned more quickly and deal more damage.<br><color_y>Damage per Mirror: {t5}% of Damage<br>Attack Range: {t6}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '5']
		}
	},
	"2552": {
		name: "Gravity Ball EX (PVP)",
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
		name: "Fireball (PVP)",
		changeskill: "2310",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 20 or above<br>SP {t4}",
			'effect': "Gather and charge a highly explosive fireball. Charge for at least 1.3 seconds to inflict maximum damage. Any enemies hit will burn.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Magic Damage per Burn: {t7}%<br></color_y><color_w>Stage 1: </color_w><color_y>{t8}%</color_y><color_w>, Stage 2: </color_w><color_y>{t9}%</color_y><color_w>, Stage 3: </color_w><color_y>{t10}%</color_y><color_w></color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '160', '163', '166', '168', '176', '197', '218', '227', '238', '293', '354', '388', '412', '436', '461', '554', '562', '571', '580', '590', '667'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t9}': [null, '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66', '66'],
			'{t10}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"2002": {
		name: "Fire Burst (PVP)",
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
			'{t5}': [null, '36', '37', '38', '39', '41', '46', '47', '48', '50', '52', '58', '61', '63', '64', '72', '84', '87', '90', '93', '97', '110', '111', '113', '114', '116', '128', '129', '131', '132'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2558": {
		name: "Gravity Well EX (PVP)",
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
		name: "Nine Tail Laser (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t6}': [null, '179', '189', '193', '218', '229', '278', '367', '396', '441', '473', '601', '642', '685', '696', '709', '832', '846', '861']
		}
	},
	"2559": {
		name: "Class Mastery II (PVP)",
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
		name: "Chilling Mist (PVP)",
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
			'{t2}': ['42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '267', '327', '352', '476', '522', '721', '786', '853', '923', '995', '1226', '1261', '1299', '1338', '1380'],
			'{t6}': [null, '4.2', '4.2', '4.2', '4.2', '4.2', '4.9', '4.9', '4.9', '4.9', '4.9', '5.6', '5.6', '5.6', '5.6', '5.6'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2508": {
		name: "Laser Cutter EX (PVP)",
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
		name: "Power Blink (PVP)",
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
		name: "Magma Ball EX (PVP)",
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
		name: "Ice Cold Field EX (PVP)",
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
		name: "Arcane Overdrive (PVP)",
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
			'{t5}': [null, '32'],
			'{t6}': [null, '1.1'],
			'{t7}': [null, '180']
		}
	},
	"2412": {
		name: "Time Stop (PVP)",
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
			'{t5}': [null, '4', '5', '6', '7', '8']
		}
	},
	"2206": {
		name: "Inferno (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fireball Lv. 1<br>Sorceress SP Total 25 or above<br>SP {t4}",
			'effect': "Summons a fiery inferno that burns enemies. <br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Magic Damage per Burn: {t7}%<br>Range: {t8}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '114', '117', '120', '126', '129', '167', '175', '185', '234', '250', '321', '343', '364', '386', '409', '475', '481', '486', '492', '499'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '5', '5', '5', '5', '5', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"2016": {
		name: "Air Strike (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"2039": {
		name: "Mana Flow (PVP)",
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
		name: "Summon Comet (PVP)",
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
			'{t5}': [null, '226', '238', '250', '273', '288', '395', '420', '452', '479', '507', '631', '666', '690', '711', '732', '856', '879']
		}
	},
	"2402": {
		name: "Meteor Storm (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '924', '1089']
		}
	},
	"2411": {
		name: "Gravity Trap (PVP)",
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
			'{t5}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t6}': [null, '83', '89', '95', '104', '112', '154', '168', '181', '194', '202', '239', '248', '257']
		}
	},
	"2361": {
		name: "Glacial Spike (Burst) (PVP)",
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
			'{t5}': [null, '48', '49', '51', '53', '54', '63', '64', '66', '71', '73', '83', '92', '97', '101', '125', '147', '156', '165', '174', '183', '208', '214', '219', '225', '231', '254', '260', '266', '273'],
			'{t6}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2557": {
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '50']
		}
	},
	"2208": {
		name: "Ignite (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '206', '237', '253', '272', '346', '473', '529', '572', '618', '665', '864', '892', '922', '954', '987', '1172'],
			'{t6}': [null, '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45']
		}
	},
	"2217": {
		name: "Flame Spark (PVP)",
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
			'{t5}': [null, '83', '89', '102', '109', '141', '237', '284', '325', '367', '405', '480', '499', '518'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2506": {
		name: "Spectrum Ray EX (PVP)",
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
			'{t5}': [null, '30']
		}
	},
	"2037": {
		name: "Mental Fortitude (PVP)",
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
		name: "Force Mirror (PVP)",
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
			'{t7}': [null, '10']
		}
	},
	"2419": {
		name: "Mana Surge (PVP)",
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
		name: "Dark Nova (PVP)",
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
			'{t5}': [null, '62', '65', '70', '78', '83', '116', '128', '139', '150', '158', '188', '195', '202']
		}
	},
	"2355": {
		name: "Frozen Spikes EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frozen Spikes Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Frozen Spikes' attack range by creating {t5} more ice barrier(s). Ice barriers explode shortly after to deal damage.<br>Enemies hit more than {t6} time(s) will take {t7}% less damage.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '1'],
			'{t6}': [null, '2'],
			'{t7}': [null, '50']
		}
	},
	"2353": {
		name: "Frost Chaos (PVP)",
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
			'{t2}': ['49', '49', '49', '49', '49', '49', '49', '49', '49', '49', '49', '49', '49', '49'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '16', '17', '18', '19', '20', '25', '25', '26', '27', '28', '30', '31', '33'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '1.5', '1.75', '2', '2.25', '2.5', '2.75', '3', '3.25', '3.5', '3.75', '4', '4.25', '4.5']
		}
	},
	"2215": {
		name: "Volcanic Vortex (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '853', '1004'],
			'{t6}': [null, '70', '70'],
			'{t7}': [null, '70', '70'],
			'{t8}': [null, '5', '5'],
			'{t9}': [null, '5', '5']
		}
	},
	"2551": {
		name: "Mystic Mischief (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Meteor Storm Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Steals one of the enemy's buffs and applies it to you. Cannot steal buffs that affect weapons.<br><color_y>Copied Buffs: {t5}<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '1'],
			'{t6}': [null, '16']
		}
	},
	"2413": {
		name: "Force Shield (PVP)",
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
			'{t2}': ['25', '25'],
			'{t3}': ['18'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '14'],
			'{t7}': [null, '40'],
			'{t8}': [null, '40'],
			'{t9}': [null, '20']
		}
	},
	"2033": {
		name: "Shock Wave (PVP)",
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
			'{t2}': ['23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
			'{t3}': ['12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '73', '76', '80', '84', '88', '111', '117', '138', '147', '158', '239', '259', '288', '310', '334', '400', '427', '442', '458', '475', '536', '554', '573', '592', '612']
		}
	},
	"2221": {
		name: "Hellfire (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sorceress SP Total 40 or above<br>SP {t4}",
			'effect': "Increases your Critical Chance when casting fire spells on burning enemies.<br><color_y>Critical Chance: {t5}% + {t6}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['38'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '1000']
		}
	},
	"2306": {
		name: "Hot Rod EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hot Rod Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Creates an explosion where Hot Rod was cast.<br><color_y>Damage per Explosion: {t5}% of Hot Rod damage<br>Tumble to cancel the skill.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"2035": {
		name: "Void Blast (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 70%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 71%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 72%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 74%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion. <br><color_y>Damage: 76%<br>Dark Magic<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 86%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 92%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 95%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 97%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 112%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 135%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 176%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 189%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 209%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 224%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 279%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 298%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 317%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 327%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 334%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 388%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 395%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 403%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 411%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 419%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 475%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>', 'Gathers and condenses magical energy into a powerful explosion.<br><color_y>Damage: 483%<br>Dark Magic<br><br>(Enhancement Effect)<br>Creates an area of darkness that explodes and deals damage for 3 sec.<br>Additional Damage: 25%</color_y>']		}
	},
	"2503": {
		name: "Laser Cutter (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '496', '528', '562', '596', '616', '747', '762', '778', '795', '812', '883', '922', '961']
		}
	},
	"2216": {
		name: "Frozen Fury (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '768', '901'],
			'{t6}': [null, '5', '5'],
			'{t7}': [null, '30', '30']
		}
	},
	"2415": {
		name: "Fast Forward (PVP)",
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
			'{t2}': ['225', '225'],
			'{t3}': ['34'],
			'{t4}': ['10'],
			'{t5}': [null, '15.0'],
			'{t6}': [null, '80']
		}
	},
	"2034": {
		name: "Glacial Spike (PVP)",
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
			'{t5}': [null, '48', '49', '51', '53', '54', '63', '64', '66', '71', '73', '83', '92', '97', '101', '125', '147', '156', '165', '174', '183', '208', '214', '219', '225', '231', '254', '260', '266', '273'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2401": {
		name: "Gravity Crush (PVP)",
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
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '204', '229', '244', '292', '313', '425', '456', '488', '521', '555', '691', '713', '736', '759', '784']
		}
	},
	"2218": {
		name: "Icy Gust (PVP)",
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
			'{t5}': [null, '68', '70', '78', '82', '102', '166', '196', '221', '248', '271', '321', '331', '341'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2036": {
		name: "Health Bolster (PVP)",
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
		name: "Fire Wall EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fire Wall Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "While using Fire Wall, press the regular attack button to throw a flame in front. <br><color_y>Additional Hit Damage: {t5} - {t6}% of Fire Wall damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '60']
		}
	},
	"2022": {
		name: "Rising Blast (PVP)",
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
			'{t2}': ['16', '16'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"2013": {
		name: "Witch Slap (PVP)",
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
		name: "Knee Jerk (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"2356": {
		name: "Chilling Mist EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chilling Mist Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Chilling Mist's attack range. Press the regular attack button in the middle of the skill to deal additional hits.<br><color_y>Additional Hit Damage: {t5}% of Chilling Mist damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"2404": {
		name: "Triple Orbs (PVP)",
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
			'{t5}': [null, '142', '144', '147', '152', '155', '177', '189', '195', '202', '231', '283', '297', '311', '326', '340', '404', '410', '417', '425', '432', '491']
		}
	},
	"2554": {
		name: "Triple Orbs EX (PVP)",
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
		name: "Black Hole (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '85', '91', '95', '102', '107', '133', '152', '160', '172', '181', '218', '229', '241', '248', '256', '293', '301', '310']
		}
	},
	"2202": {
		name: "Fire Wall (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inferno Lv. 1<br>Sorceress SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a wave of fire that has a chance to burn enemies. <br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '171', '184', '188', '219', '232', '292', '396', '429', '483', '519', '664', '711', '758', '767', '777', '911', '922', '933'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2409": {
		name: "Teleport (PVP)",
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
		name: "Gravity Well (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mystic Mischief Lv. 1<br>Mystic SP Total 65 or above<br>SP {t4}",
			'effect': "Launches nearby enemies into the air and smashes them back down to the ground.<br><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42', '42'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '420', '507', '536', '566', '588', '768', '789', '813', '838', '865', '954', '1006', '1058']
		}
	},
	"2203": {
		name: "Ice Cold Field (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '63', '65', '67', '74', '77', '116', '126', '138', '205', '226', '327', '358', '388', '420', '452', '554', '562', '570', '579', '587'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2310": {
		name: "Fireball EX Instant (PVP)",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2031": {
		name: "Wheeling Staff (PVP)",
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
			'{t5}': [null, 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 84%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 90%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 96%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 101%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 107%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 134%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 139%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 145%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 151%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 157%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 183%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 189%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 195%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 200%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 206%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 233%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 238%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>', 'Dash forward, whirling your staff at nearby enemies.<br><color_y>Damage: 244%<br><br>[Enhancement Effect]<br>The staff creates a tornado and pushes enemies away.<br>Additional Damage: 25%</color_y>']		}
	},
	"2026": {
		name: "Toxic Spray (PVP)",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['3', '8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '56', '60', '64', '69', '73', '94', '120', '134', '198', '231', '300', '335', '354', '370', '387', '450', '468', '488'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"2416": {
		name: "Gravity Spark (PVP)",
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
			'{t5}': [null, '45', '47', '49', '52', '54', '82', '86', '89', '104', '110', '148', '155', '163', '170', '178', '217', '221', '225', '229', '234']
		}
	},
	"2304": {
		name: "Inferno EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inferno Lv. 1<br>Fireball EX Lv. 1<br>Elementalist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Inferno's attack range. Finish casting the skill or press the regular attack button to trigger an explosion that damages enemies and decreases their Critical Resist.<br><color_y>Explosion Damage: {t5}% of Inferno damage<br>Enemy Critical Resist: -{t6}% for {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '40'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"2352": {
		name: "Icy Shards EX (PVP)",
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
		name: "Shatter (PVP)",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '200', '223', '237', '252', '304', '402', '442', '474', '507', '541', '687', '708', '731', '755', '780', '916'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"2368": {
		name: "Class Mastery II (PVP)",
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
			'{t5}': [null, '20'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5']
		}
	},
	"2407": {
		name: "Spectrum Ray (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '206', '232', '244', '293', '313', '408', '435', '464', '494', '524', '634', '649', '665', '681', '699']
		}
	},
	"2418": {
		name: "Time Dodge (PVP)",
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
			'{t2}': ['38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1.05', '1.4', '1.75', '2.1', '2.45', '2.8', '3.15', '3.5', '3.85', '4.2', '6.5']
		}
	},
	"2509": {
		name: "Class Mastery II (PVP)",
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
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5']
		}
	},
	"2510": {
		name: "Spectrum Ray EX Instant (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"2015": {
		name: "Stiletto Dance (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"2209": {
		name: "Glacial Freeze (PVP)",
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
			'{t5}': [null, '62', '67', '71', '79', '85', '115', '128', '139', '150', '156', '182', '189', '196'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"2507": {
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5']
		}
	},
	"2502": {
		name: "Linear Ray EX (PVP)",
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
			'{t7}': [null, '25'],
			'{t8}': [null, '50']
		}
	},
	"2307": {
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5']
		}
	},
	"2358": {
		name: "Ice Barrier EX (PVP)",
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
			'{t8}': [null, '10']
		}
	}
});