var entries = {};

entries.mapa = [{
	'type': 'entry',
	'title': 'Central',
	'route': 'controle_central',
	'tags': ['central', 'mapa'],
	'innerHtml': '<i class="fa-solid fa-users-viewfinder"></i>',
	'href': 'http://localhost:8080/compile/photon/controle_central'
},
{
	'type': 'entry',
	'title': 'Usuário',
	'route': 'controle_usuario',
	'tags': ['mapa', 'usuario'],
	'innerHtml': '<i class="fa-solid fa-person-rays"></i>',
	'href': 'http://localhost:8080/compile/photon/controle_usuario'
},
{
	'type': 'entry',
	'title': 'Via Código Rastreio',
	'route': 'rastreio-via-codigo',
	'tags': ['codigo', 'rastreio'],
	'innerHtml': '<i class="fa-solid fa-qrcode"></i>',
	'href': 'http://localhost:8080/compile/photon/controle_rastreio-via-codigo'
},
{
	'type': 'entry',
	'title': 'Mapa Geral',
	'route': 'mapa-geral',
	'tags': ['tv', 'mapa', 'tela cheia', 'full'],
	'innerHtml': '<i class="fa-brands fa-slideshare"></i>',
	'href': 'http://localhost:8080/compile/photon/controle_mapa-geral'
},
];

entries.dashboard = [{
	'type': 'entry',
	'title': 'Alertas',
	'route': 'dashboard-alerta',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-chart-simple"></i>'
},
{
	'type': 'entry',
	'title': 'Atividade',
	'route': 'dashboard-atividade',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-chart-area"></i>'
},
{
	'type': 'entry',
	'title': 'Eficiência',
	'route': 'dashboard-eficiencia',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-ranking-star"></i>'
},
{
	'type': 'entry',
	'title': 'Itinerário',
	'route': 'dashboard-itinerario',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-bars-progress"></i>'
},
{
	'type': 'entry',
	'title': 'Transmissão',
	'route': 'dashboard-transmissao',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-chart-line"></i>',
	'href': 'http://localhost:8080/compile/photon/dash_transmissao'
},
{
	'type': 'entry',
	'title': 'Geolocalização',
	'route': 'dashboard-geolocalizacao',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-chart-pie"></i>',
	'href': 'http://localhost:8080/compile/photon/dash_geolocalizacao'
},
{
	'type': 'entry',
	'title': 'Gateway',
	'route': 'dashboard-gateway',
	'tags': [],
	'innerHtml': '<i class="fa-solid fa-charging-station"></i>'
},
];

entries.central_usuario = [{
	'type': 'entry',
	'title': 'Alterar Senha',
	'innerHtml': '<i class="fa-solid fa-key"></i>'
},
{
	'type': 'entry',
	'title': 'Página Inicial',
	'innerHtml': '<i class="fa-solid fa-house"></i>',
	'order': 1,
	'href': 'https://vortus.solutions/photon/welcome.html'
},
{
	'type': 'entry',
	'title': 'Meus Contratos',
	'route': 'jur-contratos',
	'innerHtml': '<i class="fa-solid fa-file-signature"></i>'
},
{
	'type': 'entry',
	'title': 'Minhas Faturas',
	'innerHtml': '<i class="fa-solid fa-money-bill"></i>'
},
{
	'type': 'entry',
	'title': 'Minha Conta Corrente',
	'tags': ['extrato'],
	'innerHtml': '<i class="fa-solid fa-file-invoice-dollar"></i>'
},
{
	'type': 'entry',
	'title': 'Novidades',
	'innerHtml': '<i class="fa-solid fa-newspaper"></i>'
},
];

entries.suporte = [{
	'type': 'entry',
	'title': 'Helpdesk',
	'tags': ['ajuda', 'chamado', 'ticket', 'contato'],
	'innerHtml': '<i class="fa-solid fa-ticket"></i>'
},
{
	'type': 'entry',
	'title': 'Documentação',
	'tags': ['pdf', 'ajuda', 'manual'],
	'innerHtml': '<i class="fa-solid fa-book"></i>'
},
{
	'type': 'entry',
	'title': 'Chat',
	'tags': ['chat', 'online'],
	'innerHtml': '<i class="fa-brands fa-rocketchat"></i>'
},
{
	'type': 'dropdown',
	'title': 'Software',
	'innerHtml': '<i class="fa-solid fa-rocket"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Novidades',
		'route': 'software-novidade',
		'href': 'http://localhost:8080/compile/photon/software-novidade_list'
	},
	{
		'type': 'entry',
		'title': 'Incidentes',
		'route': 'software-incidente',
		'href': 'http://localhost:8080/compile/photon/software-incidente_list'
	},
	{
		'type': 'entry',
		'title': 'RoadMap',
		'route': 'software-roadmap',
		'href': 'http://localhost:8080/compile/photon/software-roadmap'
	},
	{
		'type': 'entry',
		'title': 'Status',
		'route': 'software-status',
		'href': 'http://localhost:8080/compile/photon/software-status'
	},
	]
},
];

entries.compras = [{
	'type': 'entry',
	'title': 'Marketplace',
	'route': 'marketplace',
	'innerHtml': '<i class="fa-solid fa-store"></i>',
	'href': 'http://localhost:8080/compile/photon/marketplace-view_list'
},];

entries.dados = [{
	'type': 'dropdown',
	'title': 'Backup - Upload',
	'innerHtml': '<i class="fa-solid fa-cloud-arrow-up"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Escopo Rastreável',
		'route': 'upload-escopo-rastreavel',
		'tags': ['backup', 'bkp']
	},
	{
		'type': 'entry',
		'title': 'Escopo Cliente',
		'route': 'upload-escopo-cliente',
		'tags': ['backup', 'bkp']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Backup - Download',
	'innerHtml': '<i class="fa-solid fa-cloud-arrow-down"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Escopo Rastreável',
		'route': 'download-escopo-rastreavel',
		'tags': ['backup', 'bkp']
	},
	{
		'type': 'entry',
		'title': 'Escopo Cliente',
		'route': 'download-escopo-cliente',
		'tags': ['backup', 'bkp']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Importação em Lote',
	'innerHtml': '<i class="fa-solid fa-file-export"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Ajudantes',
		'route': 'importacao-lote-ajudante'
	},
	{
		'type': 'entry',
		'title': 'Motoristas',
		'route': 'importacao-lote-motorista'
	},
	{
		'type': 'entry',
		'title': 'Rastreáveis',
		'route': 'importacao-lote-rastreavel',
		'tags': ['caminhao', 'veiculo', 'carroceria', 'carreta']
	},
	{
		'type': 'entry',
		'title': 'Simcards',
		'route': 'importacao-lote-simcard',
		'tags': ['chip']
	},
	{
		'type': 'entry',
		'title': 'Equipamentos',
		'route': 'importacao-lote-equipamento',
		'tags': ['rastreador', 'eqp', 'modulo']
	},
	{
		'type': 'entry',
		'title': 'Pontos',
		'route': 'importacao-lote-ponto'
	},
	{
		'type': 'entry',
		'title': 'Polilinha',
		'route': 'importacao-lote-polilinha',
		'tags': ['cerca', 'rota']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Migração',
	'innerHtml': '<i class="fa-solid fa-house-signal"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Fulltrack',
		'route': 'assistente-migracao-fulltrack'
	},
	{
		'type': 'entry',
		'title': 'Gtrace',
		'route': 'assistente-migracao-gtrace'
	},
	{
		'type': 'entry',
		'title': 'Gtrak',
		'route': 'assistente-migracao-gtrack'
	},
	{
		'type': 'entry',
		'title': 'Intertrack',
		'route': 'assistente-migracao-intertrack'
	},
	{
		'type': 'entry',
		'title': 'Positron',
		'route': 'assistente-migracao-positron'
	},
	{
		'type': 'entry',
		'title': 'S2 System',
		'route': 'assistente-migracao-s2system'
	},
	{
		'type': 'entry',
		'title': 'Sascar',
		'route': 'assistente-migracao-sascar'
	},
	{
		'type': 'entry',
		'title': 'Traccar',
		'route': 'assistente-migracao-traccar'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Parceiros',
	'innerHtml': '<i class="fa-solid fa-handshake"></i>',
	'childs': [{
		'type': 'divide',
		'title': 'DVR',
		'childs': [{
			'type': 'entry',
			'title': 'Avansat',
			'route': 'integracao-avansat'
		},]
	},
	{
		'type': 'divide',
		'title': 'Pagamento',
		'childs': [{
			'type': 'entry',
			'title': 'Sem Parar',
			'route': 'integracao-sem-parar'
		},
		{
			'type': 'entry',
			'title': 'Conect Car',
			'route': 'integracao-conect-car'
		},
		{
			'type': 'entry',
			'title': 'Green Pass',
			'route': 'integracao-green-pass'
		},
		{
			'type': 'entry',
			'title': 'Move Mais',
			'route': 'integracao-move-mais'
		},
		{
			'type': 'entry',
			'title': 'Veloe',
			'route': 'integracao-veloe'
		},
		{
			'type': 'entry',
			'title': 'GerenciaNet',
			'route': 'integracao-gerencianet'
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Helpdesk',
		'childs': [{
			'type': 'entry',
			'title': 'Freshdesk',
			'route': 'integracao-freshdesk'
		},
		{
			'type': 'entry',
			'title': 'Zendesk',
			'route': 'integracao-zendesk'
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Telecom',
		'childs': [{
			'type': 'entry',
			'title': 'Kore',
			'route': 'integracao-kore'
		},
		{
			'type': 'entry',
			'title': 'TNS - Link',
			'route': 'integracao-tns-link'
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Outros',
		'childs': [{
			'type': 'entry',
			'title': 'Espelhamento',
			'route': 'espelhamento',
			'href': 'http://localhost:8080/compile/photon/espelhamento_list'
		},
		{
			'type': 'entry',
			'title': 'Email',
			'route': 'conta-email',
			'href': 'http://localhost:8080/compile/photon/conta-email_list'
		},
		{
			'type': 'entry',
			'title': 'Telegram',
			'route': 'telegram-bot',
			'href': 'http://localhost:8080/compile/photon/telegram-bot_list'
		},
		{
			'type': 'entry',
			'title': 'Monitrip',
			'route': 'integracao-monitrip'
		},
		{
			'type': 'entry',
			'title': 'ClickSign',
			'route': 'integracao-clicksign'
		},
		{
			'type': 'entry',
			'title': 'Tawkio',
			'route': 'integracao-tawkio'
		},
		{
			'type': 'entry',
			'title': 'Queue',
			'route': 'queue',
			'tags': ['fila', 'integracao'],
			'href': 'http://localhost:8080/compile/photon/queue_list'
		},
		{
			'type': 'entry',
			'title': 'WebHook',
			'route': 'webhook',
			'tags': ['api', 'integracao'],
			'href': 'http://localhost:8080/compile/photon/webhook_list'
		},
		]
	},
	]
},
{
	'type': 'entry',
	'title': 'Espelhamento',
	'innerHtml': '<i class="fa-solid fa-code-branch"></i>',
	'href': 'http://localhost:8080/compile/photon/espelhamento_list'
},
];

entries.ferramentas = [{
	'type': 'dropdown',
	'title': 'Checklist',
	'innerHtml': '<i class="fa-solid fa-list-check"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Apontamentos',
		'route': 'checklist-apontamento',
		'tags': ['lancamento'],
		'href': 'http://localhost:8080/compile/photon/checklist-apontamento_list'
	},
	{
		'type': 'entry',
		'title': 'Avarias',
		'route': 'checklist-avaria',
		'tags': ['danos'],
		'href': 'http://localhost:8080/compile/photon/checklist-avaria_list'
	},
	{
		'type': 'entry',
		'title': 'Cat. Linha Amarela',
		'route': 'checklist-linha-amarela',
		'tags': ['categoria'],
		'href': 'http://localhost:8080/compile/photon/categoria-linha-amarela_list'
	},
	{
		'type': 'entry',
		'title': 'Nível Combustível',
		'route': 'checklist-nivel-combustivel',
		'tags': ['gasolina', 'alcool', 'diesel'],
		'href': 'http://localhost:8080/compile/photon/checklist-nivel-combustivel_list'
	},
	{
		'type': 'entry',
		'title': 'Parametrização',
		'route': 'checklist-parametrizacao',
		'href': 'http://localhost:8080/compile/photon/checklist-parametrizacao_list'
	},
	{
		'type': 'entry',
		'title': 'Usuários Checklist (App)',
		'route': 'checklist-usuario-mobile',
		'href': 'http://localhost:8080/compile/photon/checklist-usuario-mobile_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Logística',
	'innerHtml': '<i class="fa-solid fa-road"></i>',
	'childs': [{
		'type': 'divide',
		'title': 'Roteirizador',
		'childs': [{
			'type': 'entry',
			'title': 'Roteirizador Básico',
			'route': 'roteirizacao-basica',
			'tags': ['rota', 'roteirizacao'],
			'href': 'http://localhost:8080/compile/photon/roteirizacao-basica',
			'order': 1
		},
		{
			'type': 'entry',
			'title': 'Roteirizador Intermediário',
			'route': 'roteirizacao-intermediaria',
			'tags': ['rota', 'roteirizacao'],
			'href': 'http://localhost:8080/compile/photon/roteirizacao-intermediaria',
			'order': 2
		},
		{
			'type': 'entry',
			'title': 'Roteirizador Avançado',
			'route': 'roteirizacao-avancada',
			'tags': ['rota', 'roteirizacao'],
			'order': 3
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Outros',
		'childs': [{
			'type': 'entry',
			'title': 'Código de Rastreio',
			'tags': ['localizacao', 'busca', 'acompanhamento'],
			'href': 'http://localhost:8080/compile/photon/codigo-rastreio_list'
		},
		{
			'type': 'entry',
			'title': 'Itinerário Básico',
			'route': 'itinerario-basico',
			'tags': ['percurso', 'trajeto', 'rota'],
			'href': 'http://localhost:8080/compile/photon/itinerario-basico_list'
		},
		{
			'type': 'entry',
			'title': 'Itinerário Avançado',
			'route': 'itinerario',
			'tags': ['percurso', 'trajeto', 'rota']
		},
		{
			'type': 'entry',
			'title': 'Regra Pont. Motorista',
			'route': 'regra-pontuacao-motorista',
			'tags': ['ubi', 'pontos', 'pontuacao']
		},
		]
	}
	]
},
{
	'type': 'dropdown',
	'title': 'Financeiro',
	'innerHtml': '<i class="fa-solid fa-dollar-sign"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Bloqueio de Domínio',
		'route': 'bloqueio-dominio',
		'tags': ['inadimplente', 'suspender', 'suspencao', 'calote', 'bloquear', 'caloteiro', 'nao pagou', 'pagamento atrasado'],
		'href': 'http://localhost:8080/compile/photon/bloqueio-dominio_list'
	},
	{
		'type': 'entry',
		'title': 'Conta Corrente',
		'route': 'conta-corrente',
		'tags': ['extrato']
	},
	{
		'type': 'entry',
		'title': 'Fatura',
		'route': 'fatura',
		'tags': ['conta', 'boleto']
	},
	{
		'type': 'entry',
		'title': 'Horas Desenvolvimento',
		'route': 'horas-desenvolvimento'
	},
	{
		'type': 'entry',
		'title': 'Serviços Contratados',
		'route': 'servicos-contratados',
		'tags': ['loja']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Comandos',
	'innerHtml': '<i class="fa-solid fa-wave-square"></i>',
	'childs': [{
		'type': 'divide',
		'title': 'Auto Embarque',
		'childs': [{
			'type': 'entry',
			'title': 'Regras de Eqp',
			'route': 'regra-equipamento',
			'href': 'http://localhost:8080/compile/photon/autoe-regras-equipamento_list'
		},
		{
			'type': 'entry',
			'title': 'Autorização de Direção',
			'route': 'autorizacao-direcao',
			'href': 'http://localhost:8080/compile/photon/autoe-autorizacao-direcao_list'
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Outros',
		'childs': [{
			'type': 'entry',
			'title': 'Setup',
			'route': 'comando-setup'
		},
		{
			'type': 'entry',
			'title': 'Etc',
			'route': 'comando-etc'
		},
		]
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Outros',
	'innerHtml': '<i class="fa-solid fa-folder-plus"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'CartoDB',
		'route': 'addon-cartodb',
		'tags': ['mapa']
	},
	{
		'type': 'entry',
		'title': 'Data Lake',
		'route': 'addon-data-lake'
	},
	{
		'type': 'entry',
		'title': 'Gateway',
		'route': 'addon-gateway'
	},
	{
		'type': 'entry',
		'title': 'Grafana',
		'route': 'addon-grafana'
	},
	{
		'type': 'entry',
		'title': 'Helpdesk',
		'route': 'addon-helpdesk'
	},
	{
		'type': 'entry',
		'title': 'IPaaS',
		'route': 'addon-ipaas',
		'tags': ['meu ip', 'endereco ip']
	},
	{
		'type': 'entry',
		'title': 'Kibana',
		'route': 'addon-kibana'
	},
	{
		'type': 'entry',
		'title': 'Metaforms',
		'route': 'addon-metaforms',
		'tags': ['formulario']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Links',
	'innerHtml': '<i class="fa-solid fa-link"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Ajudante à Rastreável',
		'route': 'link-ajudante-rastreavel',
		'tags': ['veiculo', 'caminhao', 'carro'],
		'href': 'http://localhost:8080/compile/photon/link-ajudante-rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Aparato à Rastreável',
		'route': 'link-aparato-rastreavel',
		'tags': ['acessorio', 'veiculo', 'caminhao', 'carro'],
		'href': 'http://localhost:8080/compile/photon/link-aparato-rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Carroceria à Rastreável',
		'route': 'link-carroceria-rastreavel',
		'tags': ['carreta', 'veiculo', 'caminhao', 'carro'],
		'href': 'http://localhost:8080/compile/photon/link-carroceria-rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Equipamento à Rastreável',
		'route': 'link-equipamento-rastreavel',
		'tags': ['instalar', 'rastreador', 'modulo', 'eqp', 'veiculo', 'caminhao', 'carro'],
		'href': 'http://localhost:8080/compile/photon/link-equipamento-rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Motorista à Rastreável',
		'route': 'link-motorista-rastreavel',
		'tags': ['veiculo', 'caminhao', 'carro'],
		'href': 'http://localhost:8080/compile/photon/link-motorista-rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Simcard à Equipamento',
		'route': 'link-simcard-equipamento',
		'tags': ['inserir', 'chip', 'eqp', 'rastreador', 'modulo'],
		'href': 'http://localhost:8080/compile/photon/link-simcard-equipamento_list'
	},
	]
},
];

entries.relatorios = [{
	'type': 'dropdown',
	'title': 'Sistema',
	'innerHtml': '<i class="fa-solid fa-puzzle-piece"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Acessos',
		'route': 'relatorio-acessos',
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	{
		'type': 'entry',
		'title': 'Auditoria',
		'route': 'relatorio-auditoria',
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	{
		'type': 'entry',
		'title': 'Changelog',
		'route': 'relatorio-changelog',
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	{
		'type': 'entry',
		'title': 'Comandos Enviados',
		'route': 'relatorio-comandos-enviados',
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	{
		'type': 'entry',
		'title': 'Falha de Comunicação',
		'route': 'relatorio-falha-comunicacao',
		'tags': ['transmissao', 'ausencia'],
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	{
		'type': 'entry',
		'title': 'Troca de Equipamento',
		'route': 'relatorio-troca-equipamento',
		'tags': ['eqp', 'rastreador', 'modulo']
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Vencimento',
	'innerHtml': '<i class="fa-solid fa-circle-exclamation"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'CNH',
		'route': 'relatorio-vencimento-cnh',
		'tags': ['vencimento', 'carteira', 'habilitacao'],
		'href': 'http://localhost:8080/compile/photon/relatorio-vencimento-cnh'
	},
	{
		'type': 'entry',
		'title': 'Contratual',
		'route': 'relatorio-vencimento-contratual',
		'tags': ['vencimento', 'contrato'],
		'href': 'http://localhost:8080/compile/photon/relatorio-vencimento-contratual'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Outros',
	'innerHtml': '<i class="fa-solid fa-folder-plus"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Abastecimento',
		'route': 'relatorio-abastecimento',
		'href': 'http://localhost:8080/compile/photon/relatorio-abastecimento'
	},
	{
		'type': 'entry',
		'title': 'Aniversariantes',
		'route': 'relatorio-aniversariante',
		'href': 'http://localhost:8080/compile/photon/relatorio-aniversariante'
	},
	{
		'type': 'entry',
		'title': 'Betoneira',
		'route': 'relatorio-betoneira',
		'href': 'http://localhost:8080/compile/photon/relatorio-betoneira'
	},
	{
		'type': 'entry',
		'title': 'Cercas Associadas',
		'route': 'relatorio-cercas-associadas',
		'tags': ['rota', 'area', 'ponto'],
		'href': 'http://localhost:8080/compile/photon/relatorio-cercas-associadas'
	},
	{
		'type': 'entry',
		'title': 'Desloc. por Velocidade',
		'route': 'relatorio-desloc-por-velocidade',
		'tags': ['deslocamento'],
		'href': 'http://localhost:8080/compile/photon/relatorio-desloc-por-velocidade'
	},
	{
		'type': 'entry',
		'title': 'Desloc. e Paradas',
		'route': 'relatorio-desloc-e-paradas',
		'tags': ['deslocamento'],
		'href': 'http://localhost:8080/compile/photon/relatorio-desloc-e-parada'
	},
	{
		'type': 'entry',
		'title': 'Distância Percorrida',
		'route': 'relatorio-distancia-percorrida',
		'tags': ['km', 'odometro'],
		'href': 'http://localhost:8080/compile/photon/relatorio-distancia-percorrida'
	},
	{
		'type': 'entry',
		'title': 'Entrada/Saída Lógica',
		'route': 'relatorio-entrada-saida',
		'tags': ['i/o'],
		'href': 'http://localhost:8080/compile/photon/relatorio-entrada-saida'
	},
	{
		'type': 'entry',
		'title': 'Jornada',
		'route': 'relatorio-jornadas'
	},
	{
		'type': 'entry',
		'title': 'Manutenção',
		'route': 'relatorio-manutencoes'
	},
	{
		'type': 'entry',
		'title': 'Multas',
		'route': 'relatorio-multas'
	},
	{
		'type': 'entry',
		'title': 'Passagem por Pontos',
		'route': 'relatorio-passagem-por-pontos'
	},
	{
		'type': 'entry',
		'title': 'Passagem Retroativa',
		'route': 'relatorio-passagem-retroativa'
	},
	{
		'type': 'entry',
		'title': 'Posições',
		'route': 'relatorio-posicoes'
	},
	{
		'type': 'entry',
		'title': 'Sensores',
		'route': 'relatorio-sensores'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Alertas',
	'innerHtml': '<i class="fa-solid fa-car-on"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Gatilhos Disparados',
		'route': 'relatorio-gatilhos-disparados',
		'tags': ['disparo', 'alerta', 'notificacao'],
		'href': 'http://localhost:8080/compile/photon/relatorio-gatilhos-disparados'
	},
	{
		'type': 'entry',
		'title': 'Aleras Enviados',
		'tags': ['emitido', 'gatilho', 'emissao', 'enviado'],
		'href': 'http://localhost:8080/compile/photon/relatorio-acessos'
	},
	]
},
];

entries.cadastros = [{
	'type': 'dropdown',
	'title': 'Apontamento',
	'innerHtml': '<i class="fa-solid fa-hand-pointer"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Abastecimento',
		'route': 'abastecimento',
		'tags': ['abastecimento', 'gasolina', 'abastecer', 'posto'],
		'href': 'http://localhost:8080/compile/photon/abastecimento_list'
	},
	{
		'type': 'entry',
		'title': 'Aviso ao Cliente',
		'route': 'aviso-ao-cliente',
		'tags': ['aviso', 'inadimplente', 'mensagem', 'msg'],
		'href': 'http://localhost:8080/compile/photon/aviso-ao-cliente_list'
	},
	{
		'type': 'entry',
		'title': 'Manutenção Corretiva',
		'route': 'manutencao-corretiva',
		'tags': ['manutencao', 'corretiva', 'troca'],
		'href': 'http://localhost:8080/compile/photon/manutencao-corretiva_list'
	},
	{
		'type': 'entry',
		'title': 'Manutenção Preventiva',
		'route': 'manutencao-preventiva',
		'tags': ['manutencao', 'preventiva', 'troca'],
		'href': 'http://localhost:8080/compile/photon/manutencao-preventiva_list'
	},
	{
		'type': 'entry',
		'title': 'Multa',
		'route': 'multa',
		'tags': ['multa', 'infracao'],
		'href': 'http://localhost:8080/compile/photon/multa_list'
	},
	{
		'type': 'entry',
		'title': 'Ocorrência',
		'route': 'ocorrencia',
		'tags': ['ocorrencia', 'sinitro'],
		'href': 'http://localhost:8080/compile/photon/ocorrencia_list'
	},
	{
		'type': 'entry',
		'title': 'Ordem de Serviço',
		'route': 'ordem-servico',
		'tags': ['os', 'ordem', 'servico']
	},
	{
		'type': 'entry',
		'title': 'Tratamento de Alerta',
		'route': 'tratamento-alerta',
		'tags': ['tratamento', 'alerta', 'sinistro', 'gatilho'],
		'href': 'http://localhost:8080/compile/photon/tratamento-alerta_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Pedidos',
	'innerHtml': '<i class="fa-solid fa-sack-dollar"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Pedido de Simcard',
		'route': 'pedido-simcard',
		'tags': ['pedido', 'simcard', 'chip'],
		'href': 'http://localhost:8080/compile/photon/pedido-simcard_list'
	},
	{
		'type': 'entry',
		'title': 'Pedido de Equipamento',
		'route': 'pedido-equipamento',
		'tags': ['pedido', 'equipamento', 'rastreador', 'eqp'],
		'href': 'http://localhost:8080/compile/photon/pedido-equipamento_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Master',
	'innerHtml': '<i class="fa-solid fa-sack-dollar"></i>',
	'childs': [{
		'type': 'divide',
		'title': 'UI',
		'childs': [{
			'type': 'entry',
			'title': 'Entidade',
			'route': 'entidade',
			'href': 'http://localhost:8080/compile/photon/entidade_list'
		},
		{
			'type': 'entry',
			'title': 'Form',
			'route': 'form',
			'href': 'http://localhost:8080/compile/photon/form_list'
		},
		{
			'type': 'entry',
			'title': 'Form Group',
			'route': 'form-group',
			'href': 'http://localhost:8080/compile/photon/form-group_list'
		},
		{
			'type': 'entry',
			'title': 'Menu',
			'route': 'gestao-menu',
			'href': 'http://localhost:8080/compile/photon/menu_list'
		},
		{
			'type': 'entry',
			'title': 'Parametrização de Build',
			'route': 'parametrizacao-build',
			'href': 'http://localhost:8080/compile/photon/parametrizacao-build_list'
		},
		{
			'type': 'entry',
			'title': 'Personalizar Domínio',
			'route': 'personalizar-dominio',
			'href': 'http://localhost:8080/compile/photon/personalizar-dominio_list'
		},
		{
			'type': 'entry',
			'title': 'Software',
			'route': 'software',
			'href': 'http://localhost:8080/compile/photon/software_list'
		},
		]
	},
	{
		'type': 'divide',
		'title': 'Geral',
		'childs': [{
			'type': 'entry',
			'title': 'Integração',
			'route': 'integracao',
			'href': 'http://localhost:8080/compile/photon/integracao_list'
		},
		{
			'type': 'entry',
			'title': 'Marketplace Item',
			'route': 'marketplace-item',
			'href': 'http://localhost:8080/compile/photon/marketplace-item_list'
		},
		{
			'type': 'entry',
			'title': 'Repositório de Arquivos',
			'route': 'repositorio-arquivo',
			'href': 'http://localhost:8080/compile/photon/repositorio-arquivo_list'
		},
		{
			'type': 'entry',
			'title': 'Categoria CNH',
			'route': 'categoria-cnh',
			'href': 'http://localhost:8080/compile/photon/categoria-cnh_list'
		},
		{
			'type': 'entry',
			'title': 'Questão Summa',
			'route': 'questao-summa',
			'href': 'http://localhost:8080/compile/photon/questao-summa_list'
		},
		{
			'type': 'entry',
			'title': 'Categoria Summa',
			'route': 'categoria-questao-summa',
			'href': 'http://localhost:8080/compile/photon/categoria-questao-summa_list'
		},
		{
			'type': 'entry',
			'title': 'Dia Semana',
			'route': 'dia-semana',
			'href': 'http://localhost:8080/compile/photon/dia-semana_list'
		},
		{
			'type': 'entry',
			'title': 'Fuso Horário',
			'route': 'fuso-horario',
			'href': 'http://localhost:8080/compile/photon/fuso-horario_list'
		},
		{
			'type': 'entry',
			'title': 'Gravidade Multa',
			'route': 'gravidade-multa',
			'href': 'http://localhost:8080/compile/photon/gravidade-multa_list'
		},
		{
			'type': 'entry',
			'title': 'Tecnologia Conec. Simcard',
			'route': 'tecnologia-conectividade-simcard',
			'href': 'http://localhost:8080/compile/photon/tecnologia-conectividade-simcard_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Autenticação',
			'route': 'tipo-autenticacao',
			'href': 'http://localhost:8080/compile/photon/tipo-autenticacao_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Camada Sobreposição Mapa',
			'route': 'tipo-camada-overlay-mapa',
			'href': 'http://localhost:8080/compile/photon/tipo-camada-overlay-mapa_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Camada Base Mapa',
			'route': 'tipo-camada-base-mapa',
			'href': 'http://localhost:8080/compile/photon/tipo-camada-base-mapa_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Combustível',
			'route': 'tipo-combustivel',
			'href': 'http://localhost:8080/compile/photon/tipo-combustivel_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Consumo',
			'route': 'tipo-consumo',
			'href': 'http://localhost:8080/compile/photon/tipo-combustivel_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Criptografia',
			'route': 'tipo-criptografia',
			'href': 'http://localhost:8080/compile/photon/tipo-criptografia_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Gatilho',
			'route': 'tipo-gatilho',
			'href': 'http://localhost:8080/compile/photon/tipo-gatilho_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Porta I/O',
			'route': 'tipo-porta-io',
			'href': 'http://localhost:8080/compile/photon/tipo-porta-io_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Queue',
			'route': 'tipo-queue',
			'href': 'http://localhost:8080/compile/photon/tipo-queue_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Rastreável',
			'route': 'tipo-rastreavel',
			'href': 'http://localhost:8080/compile/photon/tipo-rastreavel_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Sanguíneo',
			'route': 'tipo-sanguineo',
			'href': 'http://localhost:8080/compile/photon/tipo-sanguineo_list'
		},
		{
			'type': 'entry',
			'title': 'Tipo Inter. Venc. Item Man.',
			'route': 'tipo-intervalo-item-manutencao',
			'href': 'http://localhost:8080/compile/photon/tipo-intervalo-vencimento-item-manutencao_list'
		},
		]
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Parâmetros de Sistema',
	'innerHtml': '<i class="fa-solid fa-asterisk fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Classe Item de Man.',
		'route': 'classe-item-manutencao',
		'href': 'http://localhost:8080/compile/photon/classe-item-manutencao_list'
	},
	{
		'type': 'entry',
		'title': 'Fabricante',
		'route': 'fabricante',
		'tags': ['chip', 'simcard', 'rastreador', 'modulo', 'equipamento', 'eqp'],
		'href': 'http://localhost:8080/compile/photon/fabricante_list'
	},
	{
		'type': 'entry',
		'title': 'Fornecedor',
		'route': 'fornecedor',
		'tags': ['chip', 'simcard', 'rastreador', 'modulo', 'equipamento', 'eqp'],
		'href': 'http://localhost:8080/compile/photon/fornecedor_list'
	},
	{
		'type': 'entry',
		'title': 'Item de Manutenção',
		'route': 'item-manutencao',
		'tags': ['troca', 'pneu'],
		'href': 'http://localhost:8080/compile/photon/item-manutencao_list'
	},
	{
		'type': 'entry',
		'title': 'Nome Porta I/O',
		'route': 'nome-porta-io',
		'href': 'http://localhost:8080/compile/photon/nome-porta-io_list'
	},
	{
		'type': 'entry',
		'title': 'Modelo Equipamento',
		'route': 'modelo-equipamento',
		'href': 'http://localhost:8080/compile/photon/modelo-equipamento_list'
	},
	{
		'type': 'entry',
		'title': 'Modo Pagamento',
		'route': 'modo-pagamento',
		'href': 'http://localhost:8080/compile/photon/modo-pagamento_list'
	},
	{
		'type': 'entry',
		'title': 'Operadora Tel.',
		'route': 'operadora-tel',
		'href': 'http://localhost:8080/compile/photon/operadora-tel_list'
	},
	{
		'type': 'entry',
		'title': 'Padrões Instalação I/O',
		'route': 'padrao-instalacao-io',
		'href': 'http://localhost:8080/compile/photon/padrao-instalacao-io_list'
	},
	{
		'type': 'entry',
		'title': 'Tipo Carroceria',
		'route': 'tipo-carroceria',
		'href': 'http://localhost:8080/compile/photon/tipo-carroceria_list'
	},
	{
		'type': 'entry',
		'title': 'Tipo Ponto',
		'route': 'tipo-ponto',
		'href': 'http://localhost:8080/compile/photon/tipo-ponto_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Hierarquia',
	'innerHtml': '<i class="fa-solid fa-sitemap fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Matriz',
		'route': 'matriz',
		'href': 'http://localhost:8080/compile/photon/matriz_list',
		'order': 1
	},
	{
		'type': 'entry',
		'title': 'Unidade',
		'route': 'unidade',
		'href': 'http://localhost:8080/compile/photon/unidade_list',
		'order': 2
	},
	{
		'type': 'entry',
		'title': 'Cliente',
		'route': 'cliente',
		'href': 'http://localhost:8080/compile/photon/cliente_list',
		'order': 3
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Geral',
	'innerHtml': '<i class="fa-solid fa-code-commit fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Agente de Chat',
		'route': 'agente-chat',
		'href': 'http://localhost:8080/compile/photon/agente-chat_list'
	},
	{
		'type': 'entry',
		'title': 'Ajudante',
		'route': 'ajudante',
		'href': 'http://localhost:8080/compile/photon/ajudante_list'
	},
	{
		'type': 'entry',
		'title': 'Centro de Custo',
		'route': 'centro-custo',
		'href': 'http://localhost:8080/compile/photon/centro-custo_list'
	},
	{
		'type': 'entry',
		'title': 'Contrato',
		'route': 'contrato'
	},
	{
		'type': 'entry',
		'title': 'Jornada Trabalho',
		'route': 'jornada-trabalho'
	},
	{
		'type': 'entry',
		'title': 'Motorista',
		'route': 'motorista',
		'href': 'http://localhost:8080/compile/photon/motorista_list'
	},
	{
		'type': 'entry',
		'title': 'Passageiro',
		'route': 'passageiro',
		'href': 'http://localhost:8080/compile/photon/passageiro_list'
	},
	{
		'type': 'entry',
		'title': 'Usuário',
		'route': 'usuario',
		'tags': ['usuario', 'acesso'],
		'href': 'http://localhost:8080/compile/photon/usuario_list'
	},
	{
		'type': 'entry',
		'title': 'Template de Documento',
		'route': 'template-documento',
		'href': 'http://localhost:8080/compile/photon/template-document_list'
	},
	{
		'type': 'entry',
		'title': 'Template Livre',
		'route': 'template-livre',
		'href': 'http://localhost:8080/compile/photon/template-livre_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Geometria',
	'innerHtml': '<i class="fa-solid fa-shapes fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Camada Base de Mapa',
		'route': 'camada-base-mapa',
		'href': 'http://localhost:8080/compile/photon/camada-base-mapa_list'
	},
	{
		'type': 'entry',
		'title': 'Camada Sobreposição de Mapa',
		'route': 'camada-overlay-mapa',
		'href': 'http://localhost:8080/compile/photon/camada-overlay-mapa_list'
	},
	{
		'type': 'entry',
		'title': 'GeoCam',
		'route': 'geocam',
		'tags': ['camera', 'câmera', 'rodovia'],
		'href': 'http://localhost:8080/compile/photon/geocam_list'
	},
	{
		'type': 'entry',
		'title': 'Ponto',
		'route': 'ponto',
		'tags': ['ponto', 'referencia', 'cerca', 'circulo'],
		'href': 'http://localhost:8080/compile/photon/ponto_list'
	},
	{
		'type': 'entry',
		'title': 'Poligono',
		'route': 'poligono',
		'tags': ['cerca', 'area'],
		'href': 'http://localhost:8080/compile/photon/poligono_list'
	},
	{
		'type': 'entry',
		'title': 'Polilinha',
		'route': 'polilinha',
		'tags': ['cerca', 'rota'],
		'href': 'http://localhost:8080/compile/photon/polilinha_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Grupos',
	'innerHtml': '<i class="fa-solid fa-group-arrows-rotate fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Frota',
		'route': 'frota',
		'href': 'http://localhost:8080/compile/photon/frota_list'
	},
	{
		'type': 'entry',
		'title': 'Geometria',
		'route': 'grupo-geometria',
		'href': 'http://localhost:8080/compile/photon/grupo-geometria_list'
	},
	{
		'type': 'entry',
		'title': 'Notificação',
		'route': 'grupo-notificacao',
		'href': 'http://localhost:8080/compile/photon/grupo-notificacao_list'
	},
	{
		'type': 'entry',
		'title': 'Rastreável (Virtual)',
		'route': 'grupo-rastreavel',
		'tags': ['mascara'],
		'href': 'http://localhost:8080/compile/photon/grupo-rastreavel_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Ícones',
	'innerHtml': '<i class="fa-solid fa-location-pin fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'POI',
		'route': 'icone-poi',
		'tags': ['ponto', 'icone', 'referencia'],
		'href': 'http://localhost:8080/compile/photon/icone-poi_list'
	},
	{
		'type': 'entry',
		'title': 'Rastreável',
		'route': 'icone-rastreavel',
		'tags': ['icone', 'veiculo', 'caminhao', 'moto'],
		'href': 'http://localhost:8080/compile/photon/icone-rastreavel_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Base Instalação',
	'innerHtml': '<i class="fa-solid fa-hands-holding-circle fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Aparato',
		'route': 'aparato',
		'tags': ['acessorio', 'teclado', 'sensor', 'antena'],
		'href': 'http://localhost:8080/compile/photon/aparato_list'
	},
	{
		'type': 'entry',
		'title': 'Equipamento',
		'route': 'equipamento',
		'tags': ['eqp', 'rastreador', 'modulo'],
		'href': 'http://localhost:8080/compile/photon/equipamento_list'
	},
	{
		'type': 'entry',
		'title': 'Rastreável',
		'route': 'rastreavel',
		'tags': ['veiculo', 'caminhao', 'moto', 'barco', 'carroceria'],
		'href': 'http://localhost:8080/compile/photon/rastreavel_list'
	},
	{
		'type': 'entry',
		'title': 'Simcard',
		'route': 'simcard',
		'tags': ['chip'],
		'href': 'http://localhost:8080/compile/photon/simcard_list'
	},
	]
},
{
	'type': 'dropdown',
	'title': 'Segurança',
	'innerHtml': '<i class="fa-solid fa-shield-halved fa-fw"></i>',
	'childs': [{
		'type': 'entry',
		'title': 'Pronta Resposta',
		'route': 'pronta-resposta',
		'href': 'http://localhost:8080/compile/photon/pronta-resposta_list'
	},
	{
		'type': 'entry',
		'title': 'PGR',
		'route': 'pgr',
		'href': 'http://localhost:8080/compile/photon/pgr_list'
	},
	{
		'type': 'entry',
		'title': 'LGPD',
		'route': 'lgpd',
		'href': 'http://localhost:8080/compile/photon/lgpd_list'
	},
	{
		'type': 'entry',
		'title': 'Gatilho Clássico',
		'route': 'gatilho',
		'href': 'http://localhost:8080/compile/photon/gatilho_list'
	},
	{
		'type': 'entry',
		'title': 'Gatilho Premium',
		'route': 'gatilho-premium',
		'href': 'http://localhost:8080/compile/photon/gatilho-premium_list'
	},
	{
		'type': 'entry',
		'title': 'Gerenc. de Risco',
		'route': 'gerenciadora-risco',
		'tags': ['gr', 'gerenciadora'],
		'href': 'http://localhost:8080/compile/photon/gerenciadora-risco_list'
	},
	{
		'type': 'entry',
		'title': 'Solic. Monitoramento',
		'route': 'solicitacao-monitoramento',
		'tags': ['solicitacao', 'solicitar'],
		'href': 'http://localhost:8080/compile/photon/solicitacao-monitoramento_list'
	},
	{
		'type': 'entry',
		'title': 'Supressão de Domínio',
		'route': 'dominio-supressao'
	},
	{
		'type': 'entry',
		'title': 'Domínio de Visão',
		'route': 'dominio-visao'
	},
	{
		'type': 'entry',
		'title': 'Domínio de Dados',
		'route': 'dominio-dados'
	},
	]
},
];
