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
	"5007": {
		name: "Genie's Blessing",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons a desert spirit to boost the stats of nearby allies. <br><color_y>STR, AGI, INT, VIT: +{t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['35'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '300']
		}
	},
	"5101": {
		name: "Windcall Twirl",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Restores HP while damaging enemies, and puts you into a Blade Trance. While in a Blade Trance, you'll take less damage from enemies and deal more damage with Blade Dance skills. Shares a cooldown with Illusion Dance. <br><color_y>Final Damage (Blade Dance skills): +{t5}% <br>Restores {t6}% of Max HP<br>Reduces incoming damage by {t7}%<br>Duration: {t8} sec<br>Damage: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '60'],
			'{t6}': [null, '7'],
			'{t7}': [null, '24'],
			'{t8}': [null, '12'],
			'{t9}': [null, '154']
		}
	},
	"5018": {
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
	"5305": {
		name: "Hands of Vengeance EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hands of Vengeance Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Hands of Vengeance to explode {t5} time(s) in rapid succession.<br><color_y>Hands of Vengeance Damage: +{t6}%<br>Critical resistance: -{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '3'],
			'{t6}': [null, '30'],
			'{t7}': [null, '20'],
			'{t8}': [null, '10']
		}
	},
	"5609": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Illusion Dance Lv. 1<br>SP {t4}",
			'effect': "<color_y>Illusion Dance</color_y><color_w> restores all skill cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '1'],
			'{t6}': [null, '5']
		}
	},
	"5103": {
		name: "Chakram Flurry",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Swings your chakram forward in a flurry of attacks.<br><color_y>Final Damage increased during Blade Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1537', '1571', '1606', '1641', '1675', '1957', '1992', '2026', '2061', '2095', '2377', '2412', '2446', '2481', '2515', '2797', '2832', '2866', '2901', '2935', '3217']
		}
	},
	"5411": {
		name: "Dragon Bite (Scream)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Marks an area that absorbs enemy souls, causing <color_y>Delay</color_y><color_w>. When the soul leeching is complete, a bone dragon takes a huge chomp out of enemies, dealing great damage.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Delay Effect: Slows Action Speed by {t6}%. Action Speed returns to normal over {t7} sec<br>{t8}% extra damage to Cursed enemies</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5777', '6983'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '4', '4'],
			'{t8}': [null, '30', '30']
		}
	},
	"5311": {
		name: "팬텀 클로 EX 어드벤트",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "강력한 팬텀 클로입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"5302": {
		name: "Phantom Claw EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phantom Claw Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Phantom Claw's Damage. The 3rd and 4th attacks of the chain will launch an enemy into the air.<br><color_y>Phantom Claw Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"5501": {
		name: "Squall Spin",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frolic Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Evade enemies before performing a powerful counterattack. Press the regular attack button after the counterattack to spin into the air, dragging nearby enemies with you. Can be activated by pressing <color_y>Jump</color_y><color_w> during any skill.<br></color_w><color_y>Grants invincibility for {t5} sec<br>Final Damage increased during Blade Trance<br>Damage (counterattack): {t6}%<br>Damage (extra hit): {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '18', '18', '18', '18', '18', '16', '16', '16', '16'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t6}': [null, '837', '859', '882', '905', '927', '1063', '1086', '1108', '1131', '1154', '1290', '1312', '1335', '1358'],
			'{t7}': [null, '837', '859', '882', '905', '927', '1063', '1086', '1108', '1131', '1154', '1290', '1312', '1335', '1358']
		}
	},
	"5015": {
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
	"5404": {
		name: "Spirit Snakes EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Snakes Lv. 1<br>Spirit Creeps EX Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Shoots an increasing number of larger Spirit Snakes that temporarily stun enemies.<br><color_y>Damage +{t5}% per snake<br>Stun Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '3']
		}
	},
	"5117": {
		name: "Dance of Ecstasy",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Dance to channel the spirit of a monster, who gives you buffs while giving debuffs to enemies within <color_y>{t5}m</color_y><color_w>. You'll only take {t6}% damage during the dance.<br><br>Press the regular attack damage after dancing for {t7} sec. to channel the spirit of a </color_w><color_y>ghoul</color_y><color_w>, whose dance causes enemies to take more damage.<br></color_w><color_y>Bonus Damage: {t8}</color_y><color_w><br><br>Press the special attack damage after dancing for {t9} sec. to channel the spirit of an </color_w><color_y>orc</color_y><color_w>, whose dance restores your allies' HP.<br></color_w><color_y>Restores HP every {t11} sec for {t10} sec <br>Restores {t12}% of Max HP + {t13} HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['23', '33', '43', '53', '63', '73', '83'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '15', '15', '15', '15', '15', '15', '15'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t8}': [null, '840', '1680', '2520', '3360', '4200', '5040', '5880'],
			'{t9}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5'],
			'{t11}': [null, '1', '1', '1', '1', '1', '1', '1'],
			'{t12}': [null, '1.5', '1.95', '2.4', '2.85', '3.3', '3.9', '4.35'],
			'{t13}': [null, '1500', '3600', '6000', '9000', '12600', '16500', '21000']
		}
	},
	"5016": {
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
	"5508": {
		name: "Gust Dementia EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gust Dementia Lv. 1<br>SP {t4}",
			'effect': "Enhances Gust Dementia. Increases attack range and hit count.<br><color_y>Maximum Hits: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"5012": {
		name: "Ghostly Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "While in the air, press the special attack button to kick. If the kick connects, it causes a magical explosion that damages enemies and launches you away. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '143']
		}
	},
	"5118": {
		name: "Dance of Ecstasy 2",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dance of Ecstasy Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Channels the spirit of a <color_y>dark elf</color_y><color_w>, whose dance allows you to deal increasingly more damage as enemy HP is drained. Activates when you press the regular attack button after dancing for {t5} sec. <br></color_w><color_y>Ally damage increased by {t7}% for every {t6}% of enemy HP drained. <br>Max Enemy HP Drained: {t8}%<br>Duration: {t9} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['32'],
			'{t4}': ['10'],
			'{t5}': [null, '1.5'],
			'{t6}': [null, '1'],
			'{t7}': [null, '1.5'],
			'{t8}': [null, '50'],
			'{t9}': [null, '15']
		}
	},
	"5413": {
		name: "Spirit Snakes + Instance",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Spirit Snakes that fire in all direction.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"5506": {
		name: "Chakram Storm EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakram Storm Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Chakram Storm's damage and attack speed. The last hit launches enemies into the air.<br><color_y>Chakram Storm Damage: +{t5}%<br>Chakram Storm Attack Speed: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30']
		}
	},
	"5122": {
		name: "Mist Caper",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Dashes forward at great speed, confusing enemies. Can be activated by pressing Jump during <color_y>Feather Step</color_y><color_w>. Dish out an additional attack by pressing one of the attack buttons during </color_w><color_y>Mist Caper</color_y><color_w>.<br></color_w><color_y>Regular Attack Button</color_y><color_w>: Slashes forward and shoves enemies back.<br></color_w><color_y>Special Attack Button</color_y><color_w>: Kicks enemies up and jumps backwards. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '263', '275', '287', '299', '312', '368', '380', '392', '405', '417', '473']
		}
	},
	"5001": {
		name: "Spirit Sting",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Charges 3m to knock enemies into the air. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '206', '211', '216', '221', '226', '265', '270', '275', '280', '285', '324', '329', '334', '339', '344', '383', '388', '393', '398', '402', '442', '447', '452', '457', '461', '466', '471', '476', '481']
		}
	},
	"5105": {
		name: "Bladeflip",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Whirligig Lv. 1<br>Windcall Lv. 1<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Launches enemies in front into the air as you perform a series of lethal flips. Grants you invincibility while you're flipping. <br><color_y>Final Damage increased during Blade Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '827', '841', '856', '870', '885', '1003', '1017', '1032', '1046', '1061', '1179', '1193', '1207', '1222', '1236', '1354', '1369']
		}
	},
	"5505": {
		name: "Gust Dementia",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Squall Spin Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Tumble furiously forward, dealing damage to enemies in your path and launching them into the air.<br><color_y>Final Damage increased during Blade Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2927', '2991', '3056', '3120', '3185', '3530', '3594', '3659', '3723', '3788', '4133', '4198', '4262']
		}
	},
	"5106": {
		name: "Swivel Charge",
		changeskill: "5510",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bladeflip Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Swivel forward, dealing damage to enemies in your path. While casting, press the regular attack button to stop and perform the final attack immediately. You can also activate this skill by pressing Jump while airborne.<br><color_y>Final Damage increased during Blade Trance<br>Damage: {t6}%<br>Damage Taken: +{t5}%<br>Duration {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1285', '1343', '1401', '1459', '1517', '1827', '1885', '1943', '2001', '2059', '2370', '2428', '2486', '2544', '2602', '2912'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"5204": {
		name: "Phantom Rage",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Use this skill or press the regular attack button while in the air to summon a claw to attack enemies on the ground 4 times.<br><color_y>Dark Magic<br>Damage per Projectile: {t5}%<br>Range: {t6}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '88', '89', '91', '92', '93', '107', '109', '111', '114', '116', '134', '137', '139', '141', '144', '146', '148', '150', '153', '155'],
			'{t6}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5606": {
		name: "General Dawnblade EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>General Dawnblade Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances the last hit of General Dawnblade to cause a shockwave that deals area damage.<br><color_y>Shockwave Damage: {t5}% of General Dawnblade damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"5604": {
		name: "Abolisher EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Abolisher Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Creates two explosions in front of the Abolisher.<br><color_y>Damage per Explosion: {t5}% of Abolisher damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"5215": {
		name: "Spirit Snakes",
		changeskill: "5413",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Creeps Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Attacks enemies with 3 paper snakes, dealing continuous damage and causing <color_y>Delay</color_y><color_w>.<br></color_w><color_y>Dark Magic<br>Damage per Projectile: {t5}%<br>Delay Effect: Slows enemy Action Speed by {t6}%, then increases it by {t7}%<br>Duration: {t8} sec <br>Range: {t9}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '207', '214', '222', '229', '237', '297', '304', '312', '319', '327', '387', '395', '402', '410', '417', '477', '485', '492', '500', '507'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '8'],
			'{t9}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5109": {
		name: "Illusion Dance",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Restores HP while damaging enemies, and puts you into a Spirit Trance. While in a Spirit Trance, you'll take less damage from enemies and deal more damage with Spirit Dance skills. Shares a cooldown with <color_y>Windcall Twirl</color_y><color_w>. <br></color_w><color_y>Final Damage (Spirit Dance skills): +{t5}% <br>Restores {t6}% of Max HP<br>Reduces incoming damage by {t7}%<br>Duration: {t8} sec<br>Damage: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '60'],
			'{t6}': [null, '7'],
			'{t7}': [null, '24'],
			'{t8}': [null, '12'],
			'{t9}': [null, '154']
		}
	},
	"5603": {
		name: "Dusk Hunter EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stalker EX Lv. 1<br>Dusk Hunter Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "After a short delay, Dusk Hunter's arrows will explode and launch enemies into the air.<br><color_y>Dusk Hunter Damage: +{t5}%<br>Critical Resist: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"5013": {
		name: "Hand of the Dead",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the regular attack button while on the ground to summon the hands of the dead to set you on your feet and damage nearby enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12'],
			'{t3}': ['5'],
			'{t4}': ['1'],
			'{t5}': [null, '143']
		}
	},
	"5509": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Swivel Charge Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Butterfly Whirl</color_y><color_w> or </color_w><color_y>Mist Caper</color_y><color_w>, </color_w><color_y>Swivel Charge</color_y><color_w> temporarily becomes an instant skill.<br><br></color_w><color_y>Damage: +{t5}%<br>Swivel Charge and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"5114": {
		name: "Whirling Dervishes",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Abolisher Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Summons 4 whirling dervishes to surround you and push enemies away.<br><color_y>Final Damage increased during Spirit Trance<br>Damage (when summoned): {t5}%<br>Damage (per dervish): {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '151', '159', '166', '174', '182', '222', '230', '238', '245', '253', '294', '302', '309', '317', '325', '366'],
			'{t6}': [null, '352', '370', '388', '406', '424', '519', '537', '555', '573', '590', '686', '704', '722', '740', '757', '853']
		}
	},
	"5608": {
		name: "Praetor EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Praetor Lv. 1<br>SP {t4}",
			'effect': "Enhances Praetor. Once summoned, the spirit doesn't disappear even after changing your action. Deals greater damage to the enemy.<br><color_y>Additional Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"5502": {
		name: "Chakram Flurry EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakram Flurry Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Chakram Flurry's attack speed. The last hit creates a sphere of energy to damage surrounding enemies.<br><color_y>Sphere Damage: {t5}% of Chakram Flurry damage<br>Chakram Flurry Attack Speed: +{t6}%<br>Critical Resistance: -{t7}%<br>Duration {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '20'],
			'{t8}': [null, '10']
		}
	},
	"5110": {
		name: "Illusive Gaze",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Illusion Dance Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Summons a wisp that pulls in enemies. Increases your action speed. To activate, press the special attack button right after using a Spirit Dance skill. <br><color_y>Action Speed: +{t5}%<br>Duration: {t6} sec<br>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['17'],
			'{t4}': ['1'],
			'{t5}': [null, '15'],
			'{t6}': [null, '10'],
			'{t7}': [null, '228']
		}
	},
	"5301": {
		name: "Shadow Euphoria",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phantom Avenger Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Uses unstable spirit energy to increase your Dark Damage and Final Damage. Consumes a lot of MP in the process.<br>Restores your HP whenever you attack enemies until the skill expires.<br><color_y>Restores {t5}% of the damage dealt as HP, up to {t6} HP.<br>Dark Attack: +{t7}%<br>Final Damage: +{t8}%<br>Duration: {t9} sec<br>Left-click after using the skill to use it again.<br>Stacks up to {t10}<br></color_y><color_r>MP Cost: {t11}%</color_r>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '3'],
			'{t6}': [null, '10000'],
			'{t7}': [null, '10'],
			'{t8}': [null, '7'],
			'{t9}': [null, '20'],
			'{t10}': [null, '3'],
			'{t11}': [null, '4000']
		}
	},
	"5217": {
		name: "Spirit Wolf",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ghost Gate Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a howling beast to jump forward and attack enemies, afflicting them with <color_y>Curse</color_y><color_w>.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br><br>Curse Description<br>(Stacks up to {t6})<br>Cursed Enemy Damage Duration: {t7}sec<br>Magic Damage {t8}%<br>Curse inflicts damage at least once every {t9} sec<br>Cursed Enemy Resistances: -{t10}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2500', '2573', '2646', '2720', '2793', '3185', '3258', '3331', '3404', '3478', '3869', '3942', '4016', '4089', '4162'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '10', '10', '10', '10', '10', '12', '12', '12', '12', '12', '14', '14', '14', '14', '14'],
			'{t8}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t9}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"5211": {
		name: "Humiliation",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Afflicts an enemy with <color_y>Stigma</color_y><color_w>. Certain skills will then automatically aim toward that enemy. When a </color_w><color_y>Stigmatized</color_y><color_w> enemy paralyzes you or knocks you back, their </color_w><color_y>Stigma</color_y><color_w> will be cleansed. Use the skill again to remove the </color_w><color_y>Stigma</color_y><color_w> (this does not apply to summoner's attacks).<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Duration: {t6} sec <br>Range: {t7}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '197', '201', '205', '208', '212', '237', '240', '244', '248', '252', '276', '280', '284', '287'],
			'{t6}': [null, '17', '17', '17', '17', '17', '20', '20', '20', '20', '20', '23', '23', '23', '23'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5214": {
		name: "Spirit Creeps",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Attacks enemies with {t5} paper creeps, with a chance to cast <color_y>Curse</color_y><color_w>.<br>Throws additional charms at </color_w><color_y>Stigmatized</color_y><color_w> enemies.<br></color_w><color_y>Dark Magic<br>Magic Damage per Projectile: {t6}%<br>Range: {t7}m<br><br>Curse Description<br>(Stacks up to {t8})<br>Cursed Enemy Damage Duration: {t9} sec<br>Magic Damage: {t10}%<br>Curse inflicts damage at least once every {t11} sec<br>Cursed Enemy Resistances: -{t12}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t6}': [null, '237', '242', '246', '251', '256', '293', '298', '303', '307', '312', '350', '354', '359', '364', '368', '406', '410', '415', '420', '424', '429'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t9}': [null, '10', '10', '10', '10', '10', '12', '12', '12', '12', '12', '14', '14', '14', '14', '14', '16', '16', '16', '16', '16', '18'],
			'{t10}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t11}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t12}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"5410": {
		name: "Unholy Advent",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "강화된 리젠트 에리아로서 한번에 몰아쳐 공격하고 자신의 MP를 {t5}% 회복한다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12']
		}
	},
	"5306": {
		name: "Rampage Claw EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rampage Claw Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Rampage Claw. Press the regular attack button after Rampage Claw to make additional attacks and knock down enemies.<br><color_y>Additional Hit Damage: {t5}% of Rampage Claw damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"5408": {
		name: "Specter of Torment EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Specter of Torment Lv. 1<br>SP {t4}",
			'effect': "Enhances Specter of Torment. <color_y>Left-click to unleash Ghosts of Pain 1 more time and increase the curse explosion damage. <br></color_y><color_y>Additional Ghosts of Pain Damage: {t5}%<br>Curse Explosion Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '300']
		}
	},
	"5507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Blade Dance</color_y><color_w> skills can grant </color_w><color_y>Second Turns</color_y><color_w>. Using </color_w><color_y>Windcall</color_y><color_w> with {t5} </color_w><color_y>Second Turns</color_y><color_w> reduces the cooldown of </color_w><color_y>Blade Dance</color_y><color_w> skills by </color_w><color_y>{t6}%</color_y><color_w>.<br></color_w><color_y>Windcall</color_y><color_w> Cooldown: -{t7}%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '50'],
			'{t7}': [null, '12']
		}
	},
	"5212": {
		name: "Ghostly Web",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Use this skill or press the special attack button during <color_y>Feather Step</color_y><color_w> to shoot a charm of webs that </color_w><color_y>Delays</color_y><color_w> enemies. If enemies afflicted with </color_w><color_y>Stigma</color_y><color_w> are nearby, you can use additional charms equal to the number of </color_w><color_y>Stigmatized</color_y><color_w> enemies.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Delay Effect: Slows Action Speed by {t6}%. Action Speed returns to normal over {t7} sec<br>Range: {t8}m<br>Can use Skeletal Distraction while casting this skill.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '14', '14', '14', '14', '14', '12', '12', '12', '12', '12', '10', '10', '10'],
			'{t3}': ['23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '40', '42', '43', '44', '46', '54', '55', '56', '58', '59', '67', '69', '70', '71', '73', '81', '82', '83'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '3', '3', '3', '3', '3', '4.5', '4.5', '4.5', '4.5', '4.5', '6', '6', '6', '6', '6', '7.5', '7.5', '7.5'],
			'{t8}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5310": {
		name: "리벤지 핸드 EX 인스턴트",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "빠르게 사용가능한 리벤지 핸드입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"5406": {
		name: "Spirit Wolf EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Wolf Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Adds two small wolves to Spirit Wolf.<br><color_y>Damage per Small Wolf: {t5}% of Spirit Wolf damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '20']
		}
	},
	"5102": {
		name: "Windcall",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Windcall Twirl Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Forms a ball of condensed Blade energy that drags in enemies. Increases your critical chance. To activate, press the special attack button right after using a Blade Dance skill. <br><color_y>Critical Chance: +{t5}%<br>Duration: {t6} sec<br>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['17'],
			'{t4}': ['1'],
			'{t5}': [null, '30'],
			'{t6}': [null, '5'],
			'{t7}': [null, '241']
		}
	},
	"5003": {
		name: "Needles of Despair",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Soul Breath Lv. 1<br>SP {t4}",
			'effect': "Curses the ground 3m ahead of you. Dark thorns shoot from the earth and attack enemies for {t5} seconds.<br><color_y>Dark Magic<br>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '729', '746', '762', '778', '795', '928', '944', '960', '976', '993', '1126', '1142', '1158', '1175', '1191', '1324', '1340', '1357', '1373', '1389', '1522', '1539', '1555', '1571', '1588', '1604', '1620', '1637']
		}
	},
	"5203": {
		name: "Rampage Claw",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hands of Vengeance Lv. 1<br>Blitz Claw Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "A claw attacks enemies 3 consecutive times, with a chance to stun enemies on the last attack or inflict damage to enemies resistant to stun attacks.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Additional Stun Chance: {t6}%<br>Damage to Stun-resistant Enemies (per hit): +{t7}% of Magic Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '850', '872', '894', '916', '938', '1056', '1078', '1100', '1122', '1144', '1262', '1284', '1306', '1328', '1350'],
			'{t6}': [null, '50', '50', '50', '50', '50', '60', '60', '60', '60', '60', '70', '70', '70', '70', '70'],
			'{t7}': [null, '290', '300', '310', '320', '330', '340', '350', '360', '370', '380', '390', '400', '410', '420', '430']
		}
	},
	"5218": {
		name: "Begrudge",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Summons vengeful puppets to deal damage to enemies and increase your attack.<br><color_y>Dark Magic<br>Puppet Damage: {t5}%<br>Your Damage +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '104', '105', '107', '109', '111', '112', '114', '116', '118', '119', '121'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15']
		}
	},
	"5205": {
		name: "Chain Claw",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phantom Claw Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Use this skill or press the special attack button after you've landed from <color_y>Phantom Claw, Rampage Claw, Phantom Rage, or Blitz Claw</color_y><color_w> to summon a claw to launch enemies. <br></color_w><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '13.5', '13.5', '13.5', '13.5', '13.5', '12', '12', '12', '12', '12', '10.5', '10.5', '10.5', '10.5', '10.5'],
			'{t3}': ['17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '784', '802', '819', '836', '853', '993', '1011', '1028', '1045', '1062', '1202', '1220', '1237', '1254', '1271', '1411', '1429', '1446', '1463', '1480']
		}
	},
	"5010": {
		name: "Feather Step",
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
	"5307": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Unholy Ground</color_y><color_w> is enhanced when you deal Critical Damage to enemies {t5} times using </color_w><color_y>Phantom Claw, Hands of Vengeance, Rampage Claw, Phantom Rage, Blitz Claw, or Chaos</color_y><color_w>. Deals the same amount of damage dealt when the skill is used {t6} times at once. Enhances </color_w><color_y>Phantom Claw EX</color_y><color_w> for {t7} sec. </color_w><color_y>Phantom Claw EX Advent</color_y><color_w> Damage: +{t8}%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '20'],
			'{t6}': [null, '8'],
			'{t7}': [null, '5'],
			'{t8}': [null, '300']
		}
	},
	"5112": {
		name: "Dusk Hunter",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stalker Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Summons Dusk Hunter, who shoves enemies back, then throws a powerful projectile.<br><color_y>Final Damage increased during Spirit Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '745', '765', '785', '806', '826', '991', '1012', '1032', '1052', '1073', '1238', '1259', '1279', '1299', '1320', '1485', '1505', '1526', '1546', '1566']
		}
	},
	"5206": {
		name: "Blitz Claw",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phantom Rage Lv. 1<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Use this skill or jump during <color_y>Feather Step</color_y><color_w> to summon a claw to damage enemies in front. You'll evade backwards. Afterwards, you can perform </color_w><color_y>Ghostly Kick or Phantom Rage</color_y><color_w> while airborne. <br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Damage reduced to {t7}% after target takes {t6} hits<br>Invincible when you jump</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '17.5', '17.5', '17.5', '17.5', '17.5', '16', '16', '16', '16', '16', '14.5', '14.5', '14.5'],
			'{t3}': ['23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '377', '382', '386', '390', '395', '430', '434', '439', '443', '447', '483', '487', '492', '496', '500', '536', '540', '544'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"5202": {
		name: "Spirit Thorns",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Press the regular attack button during <color_y>Feather Step</color_y><color_w> to throw a large thorn. Little thorns grow from the large thorn, dealing additional damage to enemies.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Can use Skeletal Distraction during this skill</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '269', '274', '279', '283', '288', '325', '330', '334', '339', '344', '381', '386', '390', '395', '399', '437', '441', '446', '450', '455', '460']
		}
	},
	"5503": {
		name: "Whirligig EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Whirligig Lv. 1<br>Chakram Flurry EX Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Whirligig's attack speed. Use the regular attack button to deal additional hits when the Chakram returns to you.<br><color_y>Additional Hit Damage: {t5}% of Whirligig damage<br>Whirligig Attack Speed: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '30']
		}
	},
	"5601": {
		name: "Sting",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Typhoon Ewiniar Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Summon Sting, who fires spirit energy to the front, dealing damage and causing Spirit Trance, which increases the Critical Chance of Praetor and General Dawnblade.<br><color_y>Critical Chance: +{t5}%<br>Duration: {t6} sec<br>Final Damage increased during Spirit Trance<br>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '1379', '1403', '1426', '1450', '1473', '1664', '1687', '1711', '1734', '1757', '1948', '1972', '1995', '2018']
		}
	},
	"5405": {
		name: "Ghost Gate EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ghost Gate Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Ghost Gate's damage. A massive ghost explodes upon hitting an enemy, dealing area damage.<br><color_y>Huge Ghost Damage: {t5}% of Ghost Gate damage<br>Regular Ghost Damage of Ghost Gate EX: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '400'],
			'{t6}': [null, '10']
		}
	},
	"5412": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Snakes EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use<color_y>Feather Step</color_y><color_w>, </color_w><color_y>Spirit Snakes EX</color_y><color_w> temporarily becomes an instant skill in all directions. <br><br></color_w><color_y>Damage +{t5}% <br>Spirit Snakes and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"5303": {
		name: "Chaos",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shadow Euphoria Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a chaotic army of the dead to attack enemies. <br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2410', '2468', '2525', '2583', '2641', '2912', '2969', '3027', '3084', '3142', '3413', '3471', '3528']
		}
	},
	"5111": {
		name: "Stalker",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Summons Stalker, who chases an enemy and then sacrifices himself, dealing explosive damage to nearby enemies. Can't be summoned when no enemies are available to attack.<br><color_y>Final Damage increased during Spirit Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '352', '363', '373', '384', '394', '480', '491', '501', '512', '522', '608', '619', '629', '640', '650', '736', '747', '757', '768', '778', '864']
		}
	},
	"5402": {
		name: "Spirit Creeps EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Creeps Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Spirit Creeps will fire extra charms that explode on contact and extra charms at enemies with Stigma. <br><color_y>Explosion Damage: {t5}% of Spirit Creeps damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"5607": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Spirit Dance</color_y><color_w> skills can grant </color_w><color_y>Second Turns</color_y><color_w>. Using </color_w><color_y>Illusive Gaze</color_y><color_w> when {t5} </color_w><color_y>Second Turns</color_y><color_w> are gathered reduces cooldown of </color_w><color_y>Spirit Dance</color_y><color_w> by </color_w><color_y>{t6}%</color_y><color_w>. When </color_w><color_y>Illusive Gaze</color_y><color_w> hits an enemy, the cooldown of </color_w><color_y>Illusive Gaze</color_y><color_w> decreases by {t7} sec.<br></color_w><color_y>Spirit Dance</color_y><color_w> Cooldown: -{t8}%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '30'],
			'{t7}': [null, '10'],
			'{t8}': [null, '12']
		}
	},
	"5401": {
		name: "Specter of Torment",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dragon Bite Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a specter of torment to damage enemies and afflict them with <color_y>Ghost Curse</color_y><color_w>. When </color_w><color_y>Ghost Curse</color_y><color_w> has stacked {t5} times, the target explodes, taking additional damage.<br></color_w><color_y>Dark Magic<br>Damage: {t6}%<br>Additional Damage: {t7}%<br>Ghost Curse Duration: {t8} sec<br>Range: {t9}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '1137', '1171', '1204', '1238', '1272', '1428', '1461', '1495', '1529', '1562', '1719', '1752', '1786', '1820'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"5119": {
		name: "Dance of Ecstasy 3",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dance of Ecstasy 2 Lv. 1<br>Kali SP Total 40 or above<br>SP {t4}",
			'effect': "Channels the spirit of a <color_y>minotaur</color_y><color_w>, whose dance greatly increases all elemental Damage and all Physical Damage. Activates when you press the special attack button after dancing for {t5} sec.<br></color_w><color_y>Damage is greatly boosted<br>Damage: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['35'],
			'{t4}': ['10'],
			'{t5}': [null, '1.5'],
			'{t6}': [null, '60'],
			'{t7}': [null, '20']
		}
	},
	"5009": {
		name: "Soul Seep",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use a special attack to damage a knocked down enemy by draining its spirit energy.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '181']
		}
	},
	"5104": {
		name: "Whirligig",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakram Flurry Lv. 1<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Whirls your chakram outward, dealing damage to enemies.<br><color_y>Final Damage increased during Blade Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '929', '948', '967', '985', '1004', '1155', '1173', '1192', '1211', '1229', '1380', '1399', '1417', '1436', '1455', '1606', '1624', '1643', '1661', '1680']
		}
	},
	"5005": {
		name: "Spirit Blow",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons a powerful guardian spirit to attack. The spirit has a chance to destroy Super Armor. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '295', '299', '303', '307', '311', '345', '350', '354', '358', '362', '396', '400', '404', '409', '413', '447', '451', '455', '459', '464', '468', '472', '476', '480', '485', '489']
		}
	},
	"5213": {
		name: "Puppet Dance",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 25 or above<br>SP {t4}",
			'effect': "Summons an ominous doll. Only active near enemies and increases the amount of damage that all enemies take. The doll's durability weakens and when depleted, the doll is destroyed.<br><color_y>Damage Taken by Enemies: +{t5}%<br>Increases damage taken every {t6} sec and durability reduces by {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['19'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '2'],
			'{t7}': [null, '20']
		}
	},
	"5201": {
		name: "Phantom Claw",
		changeskill: "5311",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "Summons the hands of the dead to attack enemies. Attack up to 4 times by using the regular attack button.<br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '936', '953', '971', '988', '1006', '1148', '1166', '1183', '1201', '1218', '1361', '1378', '1396', '1413', '1431', '1573', '1591', '1608', '1626', '1643', '1786']
		}
	},
	"5605": {
		name: "Praetor",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sting Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Summon Praetor, who smashes the ground 3 times, stunning enemies. Jump to avoid the waves. <br><color_y>Final Damage increased during Spirit Trance.<br>Stun Chance: {t5}%<br>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '2347', '2398', '2449', '2500', '2551', '2823', '2874', '2925', '2976', '3027', '3300', '3351', '3402']
		}
	},
	"5006": {
		name: "Phantom Guard",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons little spirits to protect you. A certain portion of damage will be taken from MP instead of HP. Damage taken to MP will be reduced. <br><color_y>Super Armor: +{t5}%<br>MP Lost: {t6}% of Damage<br>MP Damage Reduction: -{t7}%<br>Duration: {t8} seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['12'],
			'{t4}': ['10'],
			'{t5}': [null, '200'],
			'{t6}': [null, '26'],
			'{t7}': [null, '80'],
			'{t8}': [null, '29']
		}
	},
	"5309": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hands of Vengeance EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Spirit Thorns</color_y><color_w>, </color_w><color_y>Hands of Vengeance</color_y><color_w> temporarily becomes an instant skill. <br><br></color_w><color_y>Critical: +{t5}%<br>Hands of Vengeance and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '10']
		}
	},
	"5115": {
		name: "General Dawnblade",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Whirling Dervishes Lv. 1<br>Kali SP Total 40 or above<br>SP {t4}",
			'effect': "Summons General Dawnblade, who attacks 3 times as he marches forward.<br><color_y>Final Damage increased during Spirit Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1820', '1875', '1930', '1985', '2040', '2333', '2388', '2443', '2497', '2552', '2846', '2900', '2955', '3010', '3065']
		}
	},
	"5008": {
		name: "Free Spin",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Spin, then kick by pressing the special attack button.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '66']
		}
	},
	"5116": {
		name: "Typhoon Ewiniar",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>General Dawnblade Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Transforms you into the typhoon Ewiniar, who creates a massive storm that deals damage and launches enemies.<br><color_y>Final Damage increased during Spirit Trance<br>Duration: 5 sec<br>Invincible while transformed<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '7360', '8866']
		}
	},
	"5216": {
		name: "Ghost Gate",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Puppet Dance Lv. 1<br>Spirit Snakes Lv. 1<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Opens a gate to the world of the dead for up to {t5} sec. Ghosts emerge to attack enemies with a chance to cast <color_y>Curse</color_y><color_w>.<br>If enemies afflicted with </color_w><color_y>Stigma</color_y><color_w> are nearby, additional ghosts will aid you.<br></color_w><color_y>Dark Magic<br>{t6}% of Caster's HP<br>Damage per Projectile: {t7}%<br>Range: {t8}m<br><br>Curse Description<br>(Stacks up to {t9})<br>Cursed Enemy Damage Duration: {t10} sec<br>Magic Damage: {t11}%<br>Curse inflicts damage at least once every {t12} sec<br>Cursed Enemy Resistances: -{t13}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '126', '132', '138', '144', '150', '200', '206', '212', '218', '224', '273', '279', '285', '291', '297', '347', '353'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t11}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t12}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t13}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"5210": {
		name: "Phantom Avenger",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rampage Claw Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Allows the dead to possess you, making you invulnerable and increasing movement speed. Nearby enemies will take damage.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Movement Speed: +{t6}%<br>Cooldown Recovery Speed: +{t7}%<br>Duration: {t8} sec<br>Decreases damage taken by {t9}% while casting</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '6383', '7723'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '30', '30'],
			'{t8}': [null, '15', '18'],
			'{t9}': [null, '50', '50']
		}
	},
	"5220": {
		name: "Dragon Bite",
		changeskill: "5411",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Wolf Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Marks an area that absorbs enemy souls, causing <color_y>Delay</color_y><color_w>. When the soul leeching is complete, a bone dragon takes a huge chomp out of enemies, dealing great damage.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>Delay Effect: Slows Action Speed by {t6}%. Action Speed returns to normal over {t7} sec<br>{t8}% extra damage to Cursed enemies</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5777', '6983'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '4', '4'],
			'{t8}': [null, '15', '15']
		}
	},
	"5510": {
		name: "Swivel Charge Instance",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Swivel Charge that can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"5308": {
		name: "Chaos EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chaos Lv. 1<br>SP {t4}",
			'effect': "Enhances Chaos. Once summoned, the spirit zone remains even if you change your action.  Deals greater damage and slows enemies.<br><color_y>Additional Damage: {t5}%<br></color_y><color_y>Movement/Action Speed: -{t6}%<br></color_y><color_y>Slow Duration: {t7} seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '-30'],
			'{t7}': [null, '10']
		}
	},
	"5002": {
		name: "Soul Flurry",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 121%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 125%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 129%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 133%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 137%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 161%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 165%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 169%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 173%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 177%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 250%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 255%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 261%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 266%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 271%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 302%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 308%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 313%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 318%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 323%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 355%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 360%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 365%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 370%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 376%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 407%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 412%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 417%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 423%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>']		}
	},
	"5407": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Deal an extra <color_y>{t5}%</color_y><color_w> non-elemental damage against cursed enemies.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10']
		}
	},
	"5207": {
		name: "Unholy Ground",
		changeskill: "5410",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "Creates an area of unholy ground in front of you, damaging enemies every 2 seconds.<br><color_y>Dark Magic<br>Damage per Attack: {t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '156', '159', '163', '166', '169', '192', '195', '199', '202', '205', '228'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15']
		}
	},
	"5121": {
		name: "Butterfly Whirl",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "When you press the special attack button during <color_y>Feather Step,</color_y><color_w> you'll spin-kick nearby enemies 3 times.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '14.5', '14', '13.5', '13', '12.5', '12', '11.5', '11', '10.5', '10', '9.5'],
			'{t3}': ['23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '254', '258', '262', '266', '270', '305', '309', '313', '317', '321', '356', '360']
		}
	},
	"5113": {
		name: "Abolisher",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dusk Hunter Lv. 1<br>Illusive Gaze Lv. 1<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Summons Abolisher, who launches nearby enemies into the air. This skill also activates when you use a regular attack during <color_y>Feather Step</color_y><color_w>.<br></color_w><color_y>Final Damage increased during Spirit Trance<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '10', '10', '10', '10', '10', '8', '8', '8', '8', '8', '6', '6'],
			'{t3}': ['27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '514', '528', '543', '557', '571', '686', '700', '715', '729', '743', '858', '872', '887', '901', '915', '1030', '1044']
		}
	},
	"5602": {
		name: "Stalker EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stalker Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Stalker's damage and explosion range. The explosion will launch enemies into the air.<br><color_y>Stalker Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"5014": {
		name: "Skeletal Distraction",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Feather Step Lv. 1<br>SP {t4}",
			'effect': "Double-tap an arrow key or press <color_y>[Shift]</color_y><color_w> plus an arrow key when you're being attacked to evade in that direction, and leave an explosive charm at your feet that attracts enemies before exploding. <br></color_w><color_y>Damage: {t5}%<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['10'],
			'{t4}': ['5'],
			'{t5}': [null, '127'],
			'{t6}': [null, '20']
		}
	},
	"5208": {
		name: "Hands of Vengeance",
		changeskill: "5310",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Claw Lv. 1<br>Kali SP Total 30 or above<br>SP {t4}",
			'effect': "Creates an area where the dead reign 4m in front of you. The dead drag enemies into the area and explode, dealing damage.<br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '22', '22', '22', '22', '22', '20', '20', '20', '20', '20', '18', '18'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1248', '1307', '1367', '1426', '1486', '1805', '1864', '1924', '1983', '2043', '2361', '2421', '2480', '2540', '2600', '2918', '2978']
		}
	},
	"5108": {
		name: "Frolic",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakram Storm Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Charge forward before frolicking with your chakram, dealing damage to enemies caught in your dance. Start frolicking immediately by pressing the regular attack button while charging.<br><color_y>Final Damage increased during Blade Trance<br>You're invincible while dancing<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '4706', '5659']
		}
	},
	"5504": {
		name: "Bladeflip EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bladeflip Lv. 1<br>Dancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Bladeflip's attack speed. Use the regular attack button to strike down an enemy.<br><color_y>Additional Hit Damage: 30% of Bladeflip damage<br>Bladeflip Attack Speed: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"5011": {
		name: "Backflip",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use a special attack to launch a stunned enemy into the air and tumble backwards.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '169']
		}
	},
	"5209": {
		name: "Sacrifice",
		d1: {
			'lvl': '{n}',
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 40 or above<br>SP {t4}",
			'effect': "Increases damage at the cost of HP. Use the skill again to turn it off. The skill ends when you reach 1 HP or lower. <br><color_y>Damage Boost: {t5}%<br>Drains {t6} HP every 2 seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['35'],
			'{t4}': ['10'],
			'{t5}': [null, '17'],
			'{t6}': [null, '415']
		}
	},
	"5017": {
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
	"5403": {
		name: "Soul Shriek",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Specter of Torment Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a ghost that screams to attack enemies in front. Strengthens Dragon Bite temporarily and increases additional damage. Can be used quickly.<br>Attacked enemies can't perform critical attacks, and their Critical Resist also decreases. Increases the Critical Rate of allies that attack the affected enemies.<br><color_y>Hit Enemy Critical Rate: {t5}%<br>Damage: {t6}%<br>Enemy Critical Resist: -{t7}%<br>Critical Rate: +{t8}% when attacking enemies<br>Duration: {t9} sec<br>Strengthens Dragon Bite for {t10} sec<br>Can cast the skill quickly when Enhanced Dragon Bite is used. Additional damage against Cursed enemies: +{t11}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t6}': [null, '668', '691', '713', '736', '759', '850', '873', '896', '918'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t9}': [null, '15', '15', '15', '15', '15', '17', '17', '17', '17'],
			'{t10}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t11}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"5107": {
		name: "Chakram Storm",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swivel Charge Lv. 1<br>Kali SP Total 40 or above<br>SP {t4}",
			'effect': "Throw a storm of chakrams all around you.<br><color_y>Reduces incoming damage by {t5}% while casting<br>Final Damage increased during Blade Trance<br>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t6}': [null, '2791', '2876', '2961', '3046', '3132', '3588', '3673', '3758', '3843', '3929', '4384', '4470', '4555', '4640', '4725']
		}
	},
	"5304": {
		name: "Chain Claw EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Claw Lv. 1<br>Phantom Claw EX Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Chain Claw. Press the special attack button after Chain Claw to deal additional hits. This skill can be activated in midair.<br><color_y>Additional Hit Damage: {t5}% of Chain Claw damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"5004": {
		name: "Ghostly Surrender",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons a ghost to scare the fight out of your enemies. Monsters hit by the ghost will be unable to attack you for a while. <br><color_y>Dark Magic<br>Damage: {t5}%<br>Fright Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '175', '190', '205', '220', '235', '304', '319', '334', '349', '364', '433', '448', '463', '478', '493', '562', '577', '592'],
			'{t6}': [null, '4', '4', '4', '4', '4', '6.5', '6.5', '6.5', '6.5', '6.5', '9', '9', '9', '9', '9', '9', '9', '9']
		}
	},
	"5000": {
		name: "Soul Breath",
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
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 108%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 110%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 112%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 115%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 117%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 128%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 130%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 132%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 134%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 137%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 184%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 187%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 190%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 193%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 196%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 210%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 213%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 215%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 218%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 221%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 235%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 238%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 241%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 244%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 247%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 260%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 263%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 266%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 269%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>']		}
	}
});