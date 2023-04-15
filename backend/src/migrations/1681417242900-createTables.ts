import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1681417242900 implements MigrationInterface {
    name = 'CreateTables1681417242900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(158) NOT NULL, "pokedexNumber" integer NOT NULL, "imgName" integer NOT NULL, "generation" integer NOT NULL, "evolutionStage" integer NOT NULL, "evolved" integer NOT NULL, "familyID" integer NOT NULL, "crossGen" integer NOT NULL, "typeOne" character varying NOT NULL, "typeTwo" character varying NOT NULL, "weatherOne" character varying NOT NULL, "weatherTwo" character varying NOT NULL, "statTotal" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "legendary" integer NOT NULL, "aquireable" integer NOT NULL, "spawns" integer NOT NULL, "regional" integer NOT NULL, "raidable" integer NOT NULL, "hatchable" integer NOT NULL, "shiny" integer NOT NULL, "nest" integer NOT NULL, "new" integer NOT NULL, "notGettable" integer NOT NULL, "futureEvolve" integer NOT NULL, "maxCp40" integer NOT NULL, "maxCp39" integer NOT NULL, CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemons"`);
    }

}
