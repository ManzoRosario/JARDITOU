DROP DATABASE exo1;

CREATE DATABASE exo1;

USE exo1;
CREATE TABLE 'Client' (
    'cli_num' INT (11) PRIMARY KEY,
    'cli_nom' VARCHAR (50),
    'cli_adresse' VARCHAR (50),
    'cli_tel' INT (30)

)
CREATE TABLE 'Commande' (
    'com_num' INT (15) not null PRIMARY KEY,
    'cli_num' INT (11),
    'com_date' DATETIME(6),
    'com_obs' VARCHAR (50)
    FOREIGN KEY ('cli_num') REFERENCES 'Client' ('cli_num')
)
CREATE TABLE 'Produit'(
    'pro_num' INT (11) not null PRIMARY KEY,
    'pro_libelle' VARCHAR (50),
    'pro_description' VARCHAR (50)

)
CREATE TABLE 'est_compose'(
    'com_num' INT (11),
    'pro_num' INT (11),
    'est_qte' INT (11)
    FOREIGN KEY ('com_num') REFERENCES 'Commande'('com_num')
    FOREIGN KEY ('pro_num') REFERENCES 'Produit' ('pro_num')
)