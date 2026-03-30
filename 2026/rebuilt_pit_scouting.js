var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT - Superior Roboworks",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "swerve": "Swerve<br>",
        "tank": "West Coast/Tank<br>",
        "butterfly": "Butterfly/Grashopper<br>",
        "mechanum": "Mechanum<br>",
        "other": "Other"
      },
      "defaultValue": "other"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Turret Capacity",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "1 Ball Wide<br>",
        "2": "2 Balls Wide<br>",
        "3": "3 Balls Wide<br>",
        "4": "4 Balls Wide",
      },
      "defaultValue":"1"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "neo": "Neo<br>",
        "falcon": "Falcon<br>",
        "cim": "CIM<br>",
        "kracken": "Kraken<br>"
      },
      "defaultValue":"neo"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel (Box on Floor)",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel (Human Player Station)",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
