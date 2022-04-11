Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Process Modeler","modelName":"Modelo-Auditoria-Auditse-Mar2022","publishDate":"11/04/2022 11:48:54","pages":[{"id":"d9d00fad-af1b-4e36-8f85-a32fcf3fabb2","name":"Auditoria-AUDITSE","version":"1.0","author":"marco.fagundes","image":"files\\diagrams\\Auditoria_AUDITSE.png","isSubprocessPage":false,"elements":[{"id":"cdb811c3-db5f-474d-a92e-74e034d00939","name":"Elaboração do PAA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":418.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[{"id":"0f4d90c4-25eb-4bb4-8112-ff71532773ba","name":"None","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":130.0,"y":51.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"db697634-05e9-4420-bfb9-722cca75cc9e","name":"Configuração Inicial do PAA","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":243.0,"y":36.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"d4d45024-5d62-435c-858c-c89209b5867d","name":"Cadastrar PAA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":243.0,"y":124.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f3520a76-0c1c-4c07-80db-3bef34a13c8c","name":"Exclusive Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":364.0,"y":134.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Incluir Matriz de Risco","elementType":"SequenceFlow","properties":[]},{"name":"Gate","elementType":"SequenceFlow","properties":[]},{"name":"Agendar Questionário","elementType":"SequenceFlow","properties":[]}]},{"id":"dd511d74-d944-4596-923b-302c3f1eca49","name":"Incluir Matriz de Risco","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":667.0,"y":54.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6169a1b1-a44e-453b-aacf-2db4d2c795b6","name":"Exclusive Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":861.0,"y":64.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Editar Matriz","elementType":"SequenceFlow","properties":[]},{"name":"Definir Matriz de Risco p/ PAA","elementType":"SequenceFlow","properties":[]}]},{"id":"ccb71a5c-7ef9-4b13-bc2b-cf90ee5f05ba","name":"Definir Matriz de Risco p/ PAA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":871.0,"y":125.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"853791a1-e6da-4a81-97f1-3533fee22e99","name":"Editar Matriz","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":948.0,"y":54.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cab781f6-ffe0-43e4-abfa-a0e374c2839d","name":"Exclusive Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":973.0,"y":133.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Alterar Dados Gerais","elementType":"SequenceFlow","properties":[]},{"name":"Adicionar Fator de Risco","elementType":"SequenceFlow","properties":[]}]},{"id":"4f5227ac-277b-4390-b002-f5765d22f103","name":"Adicionar Fator de Risco","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1075.0,"y":123.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b27d1985-5816-4744-aa5d-653c25886cde","name":"Alterar Dados Gerais","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":948.0,"y":190.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2f4a9000-0397-410d-9ebf-e2bbadfb67a2","name":"Adicionar Critérios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1076.0,"y":190.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"03089f01-3eee-4ceb-a0a8-e206d4f3a6cd","name":"Agendar Questionário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":521.0,"y":124.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6bf82de6-fef3-4524-8025-cefcdee59c24","name":"Batch Envio Questionário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":619.0,"y":212.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d1868caf-2997-45a7-800c-b685333c40fd","name":"Acompanhar Repostas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":498.0,"y":295.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"17caca8d-9bec-42f9-8406-ad83834ee478","name":"Encerrar Receb. Respostas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":611.0,"y":295.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b7becbeb-d150-4af1-a528-abbff2a240c0","name":"Gerar Plano","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":735.0,"y":295.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"633edda5-1ee0-42a0-9847-78b8a7cb1b72","name":"Aprovar Plano","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":848.0,"y":295.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d259cf3-9f63-4bfc-bdf8-66297273c822","name":"None","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1003.0,"y":310.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"259c541c-06cb-4d8c-bcae-9fa0512431b9","name":"Exclusive Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":364.0,"y":197.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Cadastrar Fases","elementType":"SequenceFlow","properties":[]},{"name":"Cadastrar Quadro de Horas","elementType":"SequenceFlow","properties":[]}]},{"id":"9083a6dd-c631-436f-b374-32a8a3778318","name":"Cadastrar Fases","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":395.0,"y":244.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c57c8d61-8362-464c-b5e7-ab6403ff45a4","name":"Cadastrar Quadro de Horas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":268.0,"y":239.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6ac5e1e9-7fa1-410c-8a59-3eb928c8ed2f","name":"PAA (Aprovado)","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":930.0,"y":361.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"8b5eccf9-4fbf-433d-84f8-65a2491fad27","name":"Portaria","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":799.0,"y":361.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"15615a7d-fd6f-4243-8fe9-9978eab8b1dd","name":"Auditor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":418.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]},{"id":"dd0ad453-cd77-49ce-8d5e-bbc712e50182","name":"Execução de Auditoria","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":440.0}],"radius":0.0,"height":1198.0,"width":50.0,"shape":"rect"},"elementType":"Participant","pageElements":[]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:"},"searchMap":[{"containerId":"d9d00fad-af1b-4e36-8f85-a32fcf3fabb2","containerName":"Auditoria-AUDITSE","isSubprocess":false,"elements":[{"id":"cdb811c3-db5f-474d-a92e-74e034d00939","value":"Elaboração do PAA"},{"id":"15615a7d-fd6f-4243-8fe9-9978eab8b1dd","value":"Auditor"},{"id":"6ac5e1e9-7fa1-410c-8a59-3eb928c8ed2f","value":"PAA (Aprovado)"},{"id":"8b5eccf9-4fbf-433d-84f8-65a2491fad27","value":"Portaria"},{"id":"0f4d90c4-25eb-4bb4-8112-ff71532773ba","value":""},{"id":"9083a6dd-c631-436f-b374-32a8a3778318","value":"Cadastrar Fases"},{"id":"db697634-05e9-4420-bfb9-722cca75cc9e","value":"Configuração Inicial do PAA"},{"id":"c57c8d61-8362-464c-b5e7-ab6403ff45a4","value":"Cadastrar Quadro de Horas"},{"id":"dd511d74-d944-4596-923b-302c3f1eca49","value":"Incluir Matriz de Risco"},{"id":"4f5227ac-277b-4390-b002-f5765d22f103","value":"Adicionar Fator de Risco"},{"id":"2f4a9000-0397-410d-9ebf-e2bbadfb67a2","value":"Adicionar Critérios"},{"id":"d4d45024-5d62-435c-858c-c89209b5867d","value":"Cadastrar PAA"},{"id":"ccb71a5c-7ef9-4b13-bc2b-cf90ee5f05ba","value":"Definir Matriz de Risco p/ PAA"},{"id":"853791a1-e6da-4a81-97f1-3533fee22e99","value":"Editar Matriz"},{"id":"b27d1985-5816-4744-aa5d-653c25886cde","value":"Alterar Dados Gerais"},{"id":"cab781f6-ffe0-43e4-abfa-a0e374c2839d","value":""},{"id":"6169a1b1-a44e-453b-aacf-2db4d2c795b6","value":""},{"id":"03089f01-3eee-4ceb-a0a8-e206d4f3a6cd","value":"Agendar Questionário"},{"id":"6bf82de6-fef3-4524-8025-cefcdee59c24","value":"Batch Envio Questionário"},{"id":"d1868caf-2997-45a7-800c-b685333c40fd","value":"Acompanhar Repostas"},{"id":"17caca8d-9bec-42f9-8406-ad83834ee478","value":"Encerrar Receb. Respostas"},{"id":"f3520a76-0c1c-4c07-80db-3bef34a13c8c","value":""},{"id":"b7becbeb-d150-4af1-a528-abbff2a240c0","value":"Gerar Plano"},{"id":"633edda5-1ee0-42a0-9847-78b8a7cb1b72","value":"Aprovar Plano"},{"id":"9d259cf3-9f63-4bfc-bdf8-66297273c822","value":""},{"id":"259c541c-06cb-4d8c-bcae-9fa0512431b9","value":""},{"id":"78f9690a-a1d1-4607-ba1f-6ccf139f0147"},{"id":"4293bc10-2dd5-4e2e-865d-0da06773c64b"},{"id":"dd0ad453-cd77-49ce-8d5e-bbc712e50182","value":"Execução de Auditoria"},{"id":"767baa33-e412-4fce-a3f3-fa87cb1cf178","value":"Secretário "},{"id":"9fe3a725-7168-4817-bd19-bb8388ffbd72","value":"Coordenador / Secretário"},{"id":"f7736ab8-1f0a-46cd-95be-670d5dc5c3d1","value":"Chefe "},{"id":"5abb0c18-8f97-4ff1-8551-898f076e8293","value":"Auditor"},{"id":"14f51df2-0b10-41d5-b049-8d445812e753","value":"Supervisor"},{"id":"3dc07876-6faf-443b-8f28-0e8a332bd141","value":"Gestor UA"},{"id":"5ddf4900-a3d7-4e21-8d7f-13cc59fb03a7","value":"Servidor UA"},{"id":"958ffd6d-5653-45b5-874e-5fc1639906db","value":"Plano Tático Aprovado"},{"id":"2993973b-4776-4b45-8ac2-85cda1fb1d34","value":"Programa"},{"id":"c9aefb02-0ad5-4c19-8d88-11760f2fdd73","value":"Programa Aprovado"},{"id":"628d8b97-54b2-4483-824b-b7eeb6959c76","value":""},{"id":"1efeee2b-f6fc-492f-ba5e-64a9f0d6d86c","value":"Iniciar Execução de uma Auditoria"},{"id":"0c80a8f3-ad3a-4874-ab53-fdbf216ea1d6","value":"Incluir Auditores (Plano Tático)"},{"id":"858b2199-06af-4377-beef-838866867833","value":"Incluir Info. Plano Tático"},{"id":"d5e5a81b-e43b-4348-9afb-8cb70d88476b","value":"Solicitar Aprovação Plano Tático"},{"id":"fbc2d642-8bd0-4fbe-8fb0-903d54bc0898","value":"Incluir Comentário"},{"id":"1a58d7fb-caca-40de-9025-fac259a9045c","value":"Aprovar Plano Tático"},{"id":"577af458-dc17-4923-85f8-e430bfe1b1ff","value":"Adicionar Objetivo e Escopo - Auditoria"},{"id":"a9dc3468-4531-45c3-8a44-987e3f912cef","value":"Aprovar Objetivo e Escopo"},{"id":"64c8eeda-e563-41b2-a2dd-01b1f5d7c9c6","value":"Definir Cronograma"},{"id":"546cbfa2-71d6-4c97-bec9-54ab6b5f0a5d","value":"Solicitar Aprovação do Cronograma"},{"id":"14a51966-ddb8-4481-b1a6-1f230e6d44a4","value":"Aprovar Cronograma"},{"id":"61b38744-4876-491e-9c01-97f26ffd0ed4","value":"Aprovar Cronograma"},{"id":"80ba85f9-3d07-446e-a8b3-6040ccd3c10d","value":"Incluir DadosG do Programa"},{"id":"bd2d891f-429c-432d-b62e-7af55632a9e9","value":"Solicitar Supervisão"},{"id":"d56e26cb-796b-4341-aabc-9844465fe9d1","value":"Aprovar DadosG do Programa"},{"id":"462e3744-8f15-4c5b-85f2-c86671a3e3d6","value":"Solicitar Supervisão"},{"id":"c8e4c479-0d4d-4cd6-a670-356086ee7eba","value":"Aprovar Programa"},{"id":"dedd5810-2752-46f2-be00-89d6982ba2c6","value":"Finalizar Todas as Ações  do Planejamento"},{"id":"88ec57f0-b778-458f-b9f0-64d95df4d71a","value":"Solicitar Aprovação do Prorama"},{"id":"0cfb53d5-847a-45a7-9298-92199366b6fc","value":"Incluir RDIM/NA"},{"id":"3c7faf11-ee68-46e1-afb9-f4889d71f378","value":"Encaminhar RDIM p/ Análise do SEAUD"},{"id":"150eb885-eef7-4f4f-9819-e9e55f7dd310","value":"Encaminhar RDIM p/ UA"},{"id":"47fe2cbe-b0c3-4468-a9a0-d9015acac756","value":"RDIM p/ SEAUD"},{"id":"d419f35e-2132-4771-ae90-1ef808179960","value":"Receber RDIM/NA"},{"id":"89fcbe19-426c-47ef-98b3-9332a51a0a4b","value":"Responder RDIM/NA"},{"id":"41f84085-051c-4867-8948-77d57ad984a3","value":"Encaminhar Resposta RDIM/NA"},{"id":"f291643c-6018-48a0-a384-6f3e23381712","value":""},{"id":"6ebf1bfe-03bf-492b-9093-44178b83f271","value":"Encaminhar RDIM/NA p/ Subordinado"},{"id":"f9aad994-1d76-48d5-8cb7-e824c72d2ce3","value":"RDIM/NA p/ Subordinado"},{"id":"08d1ae77-3418-494e-801e-48a3fc54389b","value":"Responder RDIM/NA"},{"id":"1111f161-2d40-48b4-9505-53f615846a00","value":"Encaminhar Resposta RDIM/NA"},{"id":"69180056-9af3-4fb3-a881-f2d7d34caaac","value":""},{"id":"394f6718-5f17-487d-a671-399d7a6b4a9d","value":"RDIM p/ COAUD"},{"id":"9d3c7a74-b515-4232-bafe-b79fa064f328","value":"Encaminhar RDIM p/ Análise do COAUD"},{"id":"620421c8-34ea-4d16-9a78-bc4fff00a9ba","value":"RDIM p/ Chefia"},{"id":"a74d4ef0-d27f-412c-b8af-cd28c8b5ff8f","value":"Encaminhar RDIM Análise da Chefia"},{"id":"7958553b-ca32-4855-9052-4e5edcaf738c","value":"RDIM/NA p/ Supervisor /Chefe"},{"id":"74e72327-f3b8-4076-b2cd-22b204192c67","value":"Solicitar Supervisão RDIM/NA"},{"id":"4a828bc7-0ac2-4cfb-938a-28abf2376c45","value":"Resposta RDIM/NA p/ Gestor UA"},{"id":"15353d47-84a8-4d92-b633-c3c6a7b8566f","value":"Encaminhar Resposta RDIM p/ SEAUD"},{"id":"12ba8e25-c364-4f00-b510-3d90d015ac2b","value":"Resposta RDIM (COAUD) / NA Auditor)"},{"id":"e42f5235-2fa0-4561-8015-ec333156c198","value":"Encaminhar Resposta RDIM p/ Auditoria"},{"id":"fdc8fe8f-273c-4df6-969b-5fff56077361","value":"Receber  Resposta RDIM/NA"},{"id":"67b9fcb9-795c-4778-b539-1b502c4241fb","value":"Resposta RDIM p/ Auditoria"},{"id":"2cade44e-9fb5-4f06-a9a5-ef0aab7b1a8e","value":"Concluir RDIM/NA"},{"id":"7a25afc3-c181-420d-87dc-270f0191b592","value":"RDIM/NA Aceita p/ UA"},{"id":"4b4d902f-0692-4cf0-8916-290fda143efd","value":""},{"id":"102c3379-e9d9-4d4f-9010-0627ac33633a","value":"Encaminhar NA p/ UA"},{"id":"902f8168-b21d-4335-a2ba-c8474e8ee39f","value":"NA  p/  Gestor UA"},{"id":"2e7d0e48-75c1-46e0-8b05-cd525f0c8b8a","value":"NA"},{"id":"b27a5687-7999-4987-a502-7292422e99d7","value":""},{"id":"44bf2016-2b33-43ba-b88f-70ef26cc48a5","value":"Resposta RDIM p/ SEAUD"},{"id":"b9a6260b-c05b-47d1-801a-819677cd5e63"},{"id":"5f44312a-339b-4dcb-b7d4-726e23555a73"},{"id":"ff61e9ba-4407-4f5b-8b5f-3dc47361b79f","value":""}]},{"containerId":"db697634-05e9-4420-bfb9-722cca75cc9e","containerName":"Configuração Inicial do PAA","isSubprocess":true,"elements":[]}]}