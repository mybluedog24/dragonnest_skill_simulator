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
		name: "Genie's Blessing (PVP)",
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
		name: "Windcall Twirl (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '1.75'],
			'{t7}': [null, '18'],
			'{t8}': [null, '12'],
			'{t9}': [null, '56']
		}
	},
	"5018": {
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
	"5305": {
		name: "Hands of Vengeance EX (PVP)",
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
			'{t7}': [null, '10'],
			'{t8}': [null, '10']
		}
	},
	"5609": {
		name: "Class Mastery II (PVP)",
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
			'{t5}': [null, '0.5'],
			'{t6}': [null, '5']
		}
	},
	"5103": {
		name: "Chakram Flurry (PVP)",
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
			'{t5}': [null, '104', '106', '108', '110', '113', '129', '139', '143', '148', '169', '206', '221', '231', '241', '251', '306', '320', '335', '351', '368', '448']
		}
	},
	"5304": {
		name: "Chain Claw EX (PVP)",
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
	"5311": {
		name: "팬텀 클로 EX 어드벤트 (PVP)",
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
		name: "Phantom Claw EX (PVP)",
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
		name: "Squall Spin (PVP)",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t6}': [null, '104', '112', '118', '124', '130', '156', '163', '171', '179', '188', '223', '235', '247', '261'],
			'{t7}': [null, '104', '112', '118', '124', '130', '156', '163', '171', '179', '188', '223', '235', '247', '261']
		}
	},
	"5202": {
		name: "Spirit Thorns (PVP)",
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
			'{t5}': [null, '147', '150', '154', '156', '164', '186', '207', '215', '225', '274', '328', '358', '378', '399', '419', '496', '520', '548', '577', '608', '643']
		}
	},
	"5404": {
		name: "Spirit Snakes EX (PVP)",
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
			'{t6}': [null, '1.5']
		}
	},
	"5401": {
		name: "Specter of Torment (PVP)",
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
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '196', '216', '228', '241', '254', '297', '333', '352', '373', '396', '468', '498', '531', '567'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"5016": {
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
	"5113": {
		name: "Abolisher (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '84', '86', '91', '94', '97', '130', '136', '144', '151', '157', '194', '202', '211', '220', '229', '281', '295']
		}
	},
	"5012": {
		name: "Ghostly Kick (PVP)",
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
			'{t5}': [null, '101']
		}
	},
	"5118": {
		name: "Dance of Ecstasy 2 (PVP)",
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
			'{t8}': [null, '70'],
			'{t9}': [null, '15']
		}
	},
	"5413": {
		name: "Spirit Snakes + Instance (PVP)",
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
		name: "Chakram Storm EX (PVP)",
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
		name: "Mist Caper (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '80', '87', '93', '107', '115', '145', '154', '164', '174', '185', '230']
		}
	},
	"5001": {
		name: "Spirit Sting (PVP)",
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
			'{t5}': [null, '126', '129', '132', '135', '138', '162', '165', '168', '172', '176', '201', '205', '209', '214', '227', '261', '268', '274', '281', '288', '325', '333', '342', '351', '360', '371', '381', '393', '405']
		}
	},
	"5105": {
		name: "Bladeflip (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '175', '179', '194', '200', '208', '278', '293', '315', '331', '346', '413', '431', '450', '471', '494', '586', '616']
		}
	},
	"5505": {
		name: "Gust Dementia (PVP)",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '610', '639', '668', '697', '726', '844', '883', '923', '966', '1013', '1175', '1235', '1299']
		}
	},
	"5106": {
		name: "Swivel Charge (PVP)",
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
			'{t5}': [null, '215', '224', '244', '256', '288', '366', '390', '410', '429', '448', '552', '576', '601', '628', '656', '795'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"5604": {
		name: "Abolisher EX (PVP)",
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
		name: "Spirit Snakes (PVP)",
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
			'{t5}': [null, '80', '82', '83', '87', '89', '100', '114', '119', '147', '156', '192', '203', '214', '226', '238', '278', '293', '309', '326', '345'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '2.5', '2.5', '2.5', '2.5', '2.5', '3', '3', '3', '3', '3', '3.5', '3.5', '3.5', '3.5', '3.5', '4', '4', '4', '4', '4'],
			'{t9}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5217": {
		name: "Spirit Wolf (PVP)",
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
			'{t5}': [null, '417', '450', '468', '528', '553', '659', '689', '718', '748', '777', '897', '933', '971', '1011', '1054'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t9}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t10}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"5603": {
		name: "Dusk Hunter EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"5013": {
		name: "Hand of the Dead (PVP)",
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
			'{t5}': [null, '101']
		}
	},
	"5509": {
		name: "Class Mastery II (PVP)",
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
	"5608": {
		name: "Praetor EX (PVP)",
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
		name: "Chakram Flurry EX (PVP)",
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
			'{t7}': [null, '10'],
			'{t8}': [null, '10']
		}
	},
	"5110": {
		name: "Illusive Gaze (PVP)",
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
			'{t2}': ['25', '25'],
			'{t3}': ['17'],
			'{t4}': ['1'],
			'{t5}': [null, '15'],
			'{t6}': [null, '10'],
			'{t7}': [null, '88']
		}
	},
	"5301": {
		name: "Shadow Euphoria (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Phantom Avenger Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "A ghostly spirit takes over you body to increase their Dark Magic attack strength. Also, regenerates your HP every time you damage an enemy. <br><color_y>Restores {t5}% of the damage dealt as HP, up to {t6} HP<br>Dark Magic Attack: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '4.2'],
			'{t6}': [null, '38500'],
			'{t7}': [null, '13.75'],
			'{t8}': [null, '7.5']
		}
	},
	"5109": {
		name: "Illusion Dance (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '1.75'],
			'{t7}': [null, '18'],
			'{t8}': [null, '12'],
			'{t9}': [null, '56']
		}
	},
	"5211": {
		name: "Humiliation (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kali SP Total 20 or above<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Inflicts <color_y>Stigma</color_y><color_w> on the enemy. Certain skills will then automatically target that enemy. <br></color_w><color_y>Dark Magic<br>Damage: 142%<br>Duration: 8.5 sec <br>Range: 7m</color_y>', 'Inflicts <color_y>Stigma</color_y><color_w> on the enemy. Certain skills will then automatically target that enemy. <br></color_w><color_y>Dark Magic<br>Damage: 146%<br>Duration: 8.5 sec <br>Range: 7m</color_y>', 'Inflicts <color_y>Stigma</color_y><color_w> on the enemy. Certain skills will then automatically target that enemy. <br></color_w><color_y>Dark Magic<br>Damage: 154%<br>Duration: 8.5 sec <br>Range: 7m</color_y>', 'Inflicts <color_y>Stigma</color_y><color_w> on the enemy. Certain skills will then automatically target that enemy. <br></color_w><color_y>Dark Magic<br>Damage: 159%<br>Duration: 8.5 sec <br>Range: 7m</color_y>', 'Inflicts <color_y>Stigma</color_y><color_w> on the enemy. Certain skills will then automatically target that enemy. <br></color_w><color_y>Dark Magic<br>Damage: 179%<br>Duration: 8.5 sec <br>Range: 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 216%<br>지속시간 10초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 275%<br>지속시간 10초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 310%<br>지속시간 10초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 337%<br>지속시간 10초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 364%<br>지속시간 10초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 455%<br>지속시간 11.5초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 495%<br>지속시간 11.5초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 541%<br>지속시간 11.5초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>', '저주의 부적을 던져 피격된 대상을 <color_y>[낙인]</color_y><color_w>된 상태로 만든다. <br>이후 특정 스킬에 의한 공격은 자동으로 </color_w><color_y>[낙인]</color_y><color_w>된 대상의 위치로 발사된다. <br></color_w><color_y>암흑속성<br>공격력 593%<br>지속시간 11.5초 <br>공격후 [일반공격] 입력시 추가부적 20% 데미지<br>사거리 7m</color_y>']		}
	},
	"5214": {
		name: "Spirit Creeps (PVP)",
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
			'{t6}': [null, '25', '28', '29', '30', '31', '35', '37', '38', '39', '45', '52', '55', '57', '59', '62', '71', '75', '78', '81', '85', '88'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t9}': [null, '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '7', '7', '7', '7', '7', '8', '8', '8', '8', '8', '9'],
			'{t10}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t11}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t12}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"5306": {
		name: "Rampage Claw EX (PVP)",
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
	"5606": {
		name: "General Dawnblade EX (PVP)",
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
	"5507": {
		name: "Class Mastery (PVP)",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '6']
		}
	},
	"5212": {
		name: "Ghostly Web (PVP)",
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
			'{t5}': [null, '26', '27', '28', '29', '32', '39', '46', '48', '52', '54', '65', '68', '71', '74', '78', '91', '96', '100'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t7}': [null, '1.5', '1.5', '1.5', '1.5', '1.5', '2.25', '2.25', '2.25', '2.25', '2.25', '3', '3', '3', '3', '3', '3.75', '3.75', '3.75'],
			'{t8}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5310": {
		name: "리벤지 핸드 EX 인스턴트 (PVP)",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '22', '22', '22', '22', '22', '20', '20', '20', '20', '20', '18', '18'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"5114": {
		name: "Whirling Dervishes (PVP)",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '29', '30', '33', '34', '39', '50', '54', '57', '60', '62', '78', '81', '85', '89', '93', '114'],
			'{t6}': [null, '67', '70', '76', '80', '92', '117', '126', '133', '139', '146', '181', '190', '198', '208', '218', '266']
		}
	},
	"5102": {
		name: "Windcall (PVP)",
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
			'{t2}': ['25', '25'],
			'{t3}': ['17'],
			'{t4}': ['1'],
			'{t5}': [null, '15'],
			'{t6}': [null, '5'],
			'{t7}': [null, '94']
		}
	},
	"5003": {
		name: "Needles of Despair (PVP)",
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
			'{t6}': [null, '154', '156', '159', '161', '164', '183', '186', '189', '194', '197', '219', '223', '228', '243', '249', '283', '290', '298', '305', '312', '350', '359', '369', '380', '391', '403', '416', '430']
		}
	},
	"5203": {
		name: "Rampage Claw (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hands of Vengeance Lv. 1<br>Blitz Claw Lv. 1<br>Kali SP Total 35 or above<br>SP {t4}",
			'effect': "A claw attacks enemies 3 times, with a chance to Stun enemies on the last attack. <br><color_y>Dark Magic<br>Damage: {t5}%<br>Additional Stun Chance: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '299', '323', '336', '377', '395', '470', '491', '511', '532', '553', '637', '662', '689', '717', '747'],
			'{t6}': [null, '50', '50', '50', '50', '50', '60', '60', '60', '60', '60', '70', '70', '70', '70', '70']
		}
	},
	"5218": {
		name: "Begrudge (PVP)",
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
			'{t5}': [null, '103', '105', '106', '108', '109', '111', '112', '114', '115', '117', '118'],
			'{t6}': [null, '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18']
		}
	},
	"5205": {
		name: "Chain Claw (PVP)",
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
			'{t5}': [null, '101', '104', '107', '112', '115', '140', '153', '159', '182', '191', '240', '251', '262', '274', '285', '342', '356', '372', '389', '408']
		}
	},
	"5010": {
		name: "Feather Step (PVP)",
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
		name: "Class Mastery (PVP)",
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
	"5002": {
		name: "Soul Flurry (PVP)",
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
			'{t5}': [null, 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 84%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 88%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 93%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 97%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 101%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 126%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 130%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 134%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 140%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 144%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 220%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 231%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 238%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 245%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 263%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 308%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 318%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 328%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 338%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 348%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 399%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 410%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 422%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 435%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 449%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 510%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 527%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 544%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>', 'Launches air blades to deal damage to nearby enemies.<br><color_y>Damage: 563%<br><br>Hits the ground and draws enemies toward you.<br>Additional Damage: 25%</color_y>']		}
	},
	"5112": {
		name: "Dusk Hunter (PVP)",
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
			'{t5}': [null, '101', '103', '107', '109', '112', '138', '143', '148', '169', '179', '221', '231', '241', '251', '260', '316', '330', '345', '362', '379']
		}
	},
	"5206": {
		name: "Blitz Claw (PVP)",
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
			'{t5}': [null, '185', '194', '197', '201', '233', '266', '341', '365', '404', '429', '501', '530', '559', '589', '623', '721', '764', '811'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"5015": {
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
	"5503": {
		name: "Whirligig EX (PVP)",
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
		name: "Sting (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90', '90'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '195', '211', '222', '232', '243', '291', '305', '320', '336', '353', '421', '444', '469', '496']
		}
	},
	"5405": {
		name: "Ghost Gate EX (PVP)",
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
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spirit Snakes EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use<color_y>Feather Step</color_y><color_w>, </color_w><color_y>Spirit Snakes EX</color_y><color_w> temporarily changes into Instance and can be used quickly in all directions. <br><br></color_w><color_y>Damage +{t5}% <br></color_y>",
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
		name: "Chaos (PVP)",
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
			'{t5}': [null, '471', '492', '514', '536', '557', '640', '668', '697', '729', '762', '874', '917', '962']
		}
	},
	"5111": {
		name: "Stalker (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '66', '68', '69', '71', '73', '86', '93', '96', '99', '113', '139', '149', '156', '163', '170', '205', '214', '224', '234', '245', '296']
		}
	},
	"5402": {
		name: "Spirit Creeps EX (PVP)",
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
		name: "Class Mastery (PVP)",
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
			'{t6}': [null, '15'],
			'{t7}': [null, '10'],
			'{t8}': [null, '6']
		}
	},
	"5117": {
		name: "Dance of Ecstasy (PVP)",
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
			'{t8}': [null, '84', '168', '252', '336', '420', '504', '588'],
			'{t9}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5'],
			'{t11}': [null, '1', '1', '1', '1', '1', '1', '1'],
			'{t12}': [null, '0.38', '0.49', '0.6', '0.71', '0.83', '0.98', '1.09'],
			'{t13}': [null, '150', '360', '600', '900', '1260', '1650', '2100']
		}
	},
	"5115": {
		name: "General Dawnblade (PVP)",
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
			'{t5}': [null, '418', '462', '484', '563', '594', '735', '773', '812', '851', '890', '1055', '1104', '1156', '1211', '1270']
		}
	},
	"5009": {
		name: "Soul Seep (PVP)",
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
			'{t5}': [null, '135']
		}
	},
	"5104": {
		name: "Whirligig (PVP)",
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
			'{t5}': [null, '122', '125', '129', '131', '134', '161', '166', '172', '197', '209', '258', '269', '281', '293', '305', '373', '391', '409', '429', '451']
		}
	},
	"5005": {
		name: "Spirit Blow (PVP)",
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
			'{t5}': [null, '173', '175', '178', '180', '183', '202', '207', '209', '217', '221', '245', '264', '272', '282', '290', '325', '333', '342', '351', '361', '371', '382', '394', '407', '420', '435']
		}
	},
	"5213": {
		name: "Puppet Dance (PVP)",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '2'],
			'{t7}': [null, '20']
		}
	},
	"5201": {
		name: "Phantom Claw (PVP)",
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
			'{t5}': [null, '124', '127', '129', '131', '136', '154', '166', '171', '176', '202', '237', '253', '264', '275', '287', '333', '346', '361', '377', '394', '457']
		}
	},
	"5605": {
		name: "Praetor (PVP)",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '480', '503', '525', '547', '570', '661', '691', '722', '756', '792', '918', '965', '1015']
		}
	},
	"5006": {
		name: "Phantom Guard (PVP)",
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
			'{t5}': [null, '50'],
			'{t6}': [null, '26'],
			'{t7}': [null, '40'],
			'{t8}': [null, '14.5']
		}
	},
	"5309": {
		name: "Class Mastery II (PVP)",
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
	"5119": {
		name: "Dance of Ecstasy 3 (PVP)",
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
			'{t6}': [null, '30'],
			'{t7}': [null, '20']
		}
	},
	"5008": {
		name: "Free Spin (PVP)",
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
			'{t5}': [null, '41']
		}
	},
	"5116": {
		name: "Typhoon Ewiniar (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>General Dawnblade Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Transform you into the typhoon Ewiniar, who creates a massive storm and launches enemies.<br><color_y>Duration: 5 sec<br>Invincible while transformed<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1034', '1241']
		}
	},
	"5216": {
		name: "Ghost Gate (PVP)",
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
			'{t7}': [null, '27', '28', '28', '32', '33', '46', '49', '53', '56', '59', '73', '76', '80', '84', '88', '108', '114'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t11}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t12}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t13}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"5210": {
		name: "Phantom Avenger (PVP)",
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
			'{t5}': [null, '1007', '1208'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '30', '30'],
			'{t8}': [null, '7.5', '9'],
			'{t9}': [null, '50', '50']
		}
	},
	"5220": {
		name: "Dragon Bite (PVP)",
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
			'{t5}': [null, '853', '1024'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '4', '4'],
			'{t8}': [null, '15', '15']
		}
	},
	"5510": {
		name: "Swivel Charge Instance (PVP)",
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
		name: "Chaos EX (PVP)",
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
			'{t7}': [null, '5']
		}
	},
	"5406": {
		name: "Spirit Wolf EX (PVP)",
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
	"5407": {
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5']
		}
	},
	"5207": {
		name: "Unholy Ground (PVP)",
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
			'{t5}': [null, '58', '64', '67', '79', '86', '118', '127', '136', '146', '158', '215'],
			'{t6}': [null, '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5']
		}
	},
	"5121": {
		name: "Butterfly Whirl (PVP)",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '101', '105', '113', '118', '137', '170', '181', '192', '203', '216', '259', '278']
		}
	},
	"5508": {
		name: "Gust Dementia EX (PVP)",
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
	"5602": {
		name: "Stalker EX (PVP)",
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
		name: "Skeletal Distraction (PVP)",
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
			'{t5}': [null, '138'],
			'{t6}': [null, '20']
		}
	},
	"5208": {
		name: "Hands of Vengeance (PVP)",
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
			'{t5}': [null, '196', '205', '214', '236', '248', '346', '366', '393', '414', '435', '543', '569', '595', '623', '653', '799', '840']
		}
	},
	"5108": {
		name: "Frolic (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakram Storm Lv. 1<br>Kali SP Total 45 or above<br>SP {t4}",
			'effect': "Charge forward before frolicking with your chakram, dealing damage to enemies caught in your dance. Start frolicking immediately by pressing the regular attack button while charging. <br><color_y>You're invincible while dancing<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1120', '1344']
		}
	},
	"5504": {
		name: "Bladeflip EX (PVP)",
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
		name: "Backflip (PVP)",
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
			'{t5}': [null, '124']
		}
	},
	"5209": {
		name: "Sacrifice (PVP)",
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
			'{t6}': [null, '830']
		}
	},
	"5017": {
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
	"5403": {
		name: "Soul Shriek (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Specter of Torment Lv. 1<br>Screamer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a ghost to shriek at enemies in front. Affected target's critical resist decreases. Increases your critical chance against affected enemies.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Target's Critical Resist: -{t6}%<br>Critical Chance vs. Targets: +{t7}% <br>Duration: {t8} seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '594', '635', '677', '720', '768', '929', '997', '1071', '1155'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '7.5', '7.5', '7.5', '7.5', '7.5', '8.5', '8.5', '8.5', '8.5']
		}
	},
	"5107": {
		name: "Chakram Storm (PVP)",
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
			'{t6}': [null, '348', '377', '392', '445', '466', '563', '589', '615', '641', '668', '780', '813', '848', '885', '925']
		}
	},
	"5204": {
		name: "Phantom Rage (PVP)",
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
			'{t5}': [null, '50', '51', '54', '55', '56', '69', '72', '76', '94', '103', '122', '129', '136', '143', '150', '158', '166', '176', '185', '196'],
			'{t6}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"5004": {
		name: "Ghostly Surrender (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons a ghost to scare the fight straight out of your enemies. Monsters hit by the ghost are unable to attack you for a while. <br><color_y>Dark Magic<br>Damage: {t5}%<br>Fright Duration: {t6} sec<br>Fright has no effect on other players</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '93', '100', '107', '113', '124', '154', '173', '185', '223', '245', '308', '330', '353', '379', '408', '506', '549', '596'],
			'{t6}': [null, '2.8', '2.8', '2.8', '2.8', '2.8', '4.55', '4.55', '4.55', '4.55', '4.55', '6.3', '6.3', '6.3', '6.3', '6.3', '6.3', '6.3', '6.3']
		}
	},
	"5000": {
		name: "Soul Breath (PVP)",
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
			'{t5}': [null, 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 14%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 15%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 16%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 17%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Projectile: 18%<br>Range: 7m<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 19%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 20%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 21%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 22%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 24%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 30%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 37%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 39%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 42%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 57%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 76%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 82%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 88%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 95%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 101%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 125%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 133%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 142%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 152%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 163%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 200%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 214%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 230%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>', 'Launches 2 dark energy blasts from your weapon.<br><color_y>Dark Magic<br>Damage per Blast: 247%<br>Range: 7m<br><br>Increases the range of the blasts and penetrates enemies.<br>Additional Damage: 25%</color_y>']		}
	},
	"5408": {
		name: "Specter of Torment EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Specter of Torment Lv. 1<br>SP {t4}",
			'effect': "Enhances Specter of Torment. <color_y>Left-click to unleash Ghosts of Pain 1 more time.<br></color_y><color_y>Additional Ghosts of Pain Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '25']
		}
	}
});