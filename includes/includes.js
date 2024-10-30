const schema = [
  { name: "Empresa", type: "STRING" },
  { name: "Cod", type: "STRING" },
  { name: "Centraliza", type: "BOOL" },
  { name: "Atrib1", type: "STRING" },
  { name: "Atrib2", type: "FLOAT64" },
  { name: "Atrib3", type: "BOOL" },
  { name: "Atrib4", type: "BOOL" },
  { name: "Atrib5", type: "BOOL" },
  { name: "Atrib6", type: "BOOL" },
  { name: "Cuenta", type: "STRING" },
  { name: "Aux1", type: "STRING" },
  { name: "Origen", type: "STRING" },
  { name: "Clase", type: "INT64" },
  { name: "Tipo_foliacion", type: "INT64" },
  { name: "SSMA_TimeStamp", type: "TIMESTAMP" },
  { name: "Clase_doc1", type: "STRING" },
  { name: "Clase_doc2", type: "STRING" },
  { name: "Clase_doc3", type: "STRING" },
  { name: "Cod_clase1", type: "INT64" },
  { name: "Cod_clase2", type: "INT64" },
  { name: "Cod_clase3", type: "INT64" },
  { name: "Extracontab1", type: "FLOAT64" }
];

function createPartitionedTable(tableName) {
  return {
    schema: schema,
    bigquery: {
      partitionBy: {
        field: "SSMA_TimeStamp",
        type: "DAY"
      }
    }
  };
}

module.exports = { createPartitionedTable };
