interface Entity {
  name: string;
  columns: string[];
}

interface Relations {
  type?: string;
  from?: string;
  to?: string;
}

interface Position {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface Table {
  name: string;
  position: Position;
}

interface EntityDiagram {
  tables: Table[];
}

interface Component {
  entities: Entity[];
  relations?: Relations;
  entityDiagram: EntityDiagram;
}

interface RelationOnDiagram {
  
}
