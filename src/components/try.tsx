USE [ffe]
GO

/****** Object:  Table [dbo].[customer_financials]    Script Date: 17/11/2025 7:17:12 pm ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[customer_financials](
	[fin_id] [numeric](8, 0) IDENTITY(1,1) NOT NULL,
	[customerid] [numeric](12, 0) NOT NULL,
	[job_description] [nvarchar](100) NULL,
	[company_name] [nvarchar](120) NULL,
	[place_work] [nvarchar](125) NULL,
	[ofis_phone] [nvarchar](15) NULL,
	[company_ind] [nvarchar](50) NULL,
	[biz_nature] [numeric](8, 0) NULL,
	[emp_type] [nvarchar](30) NULL,
	[contrak_xpiry] [nvarchar](30) NULL,
	[months_w_comp] [numeric](5, 0) NULL,
	[gross_pay] [float] NULL,
	[pay_freq] [nvarchar](30) NULL,
	[o_benefit] [float] NULL,
	[pmt_mode] [varchar](5) NULL,
	[yrs_biz_optn] [numeric](6, 0) NULL,
	[employi_count] [numeric](6, 0) NULL,
	[flag] [nvarchar](2) NULL,
	[makerid] [numeric](8, 0) NULL,
	[makerdate] [date] NULL,
	[source_type] [numeric](8, 0) NULL,
	[occupation] [numeric](8, 0) NULL,
	[netpay] [float] NULL,
	[house] [nvarchar](150) NULL,
	[strit] [nvarchar](150) NULL,
	[province] [numeric](18, 0) NULL,
	[city] [numeric](18, 0) NULL,
	[barangay] [numeric](18, 0) NULL,
	[sideline] [nvarchar](5) NULL,
	[BeginDate] [datetime2](7) GENERATED ALWAYS AS ROW START NOT NULL,
	[EndDate] [datetime2](7) GENERATED ALWAYS AS ROW END NOT NULL,
	[wProof] [nvarchar](5) NULL,
	[industry] [numeric](18, 0) NULL,
	[mainsector] [numeric](18, 0) NULL,
	[subsector] [numeric](18, 0) NULL,
	[OfficeAddrLat] [float] NULL,
	[OfficeAddrLng] [float] NULL,
	[OfficeAddressDistance] [float] NULL,
	[ResourcePerson] [nvarchar](2000) NULL,
	[landmark] [nvarchar](255) NULL,
	[CompanyFloor] [nvarchar](200) NULL,
	[PersonalPersonel] [nvarchar](200) NULL,
	[WorkDepartment] [nvarchar](200) NULL,
	[TenureOfWork] [nvarchar](200) NULL,
	[WhySixMonthOfWork] [nvarchar](200) NULL,
	[WhySixMonthOfWorkOthers] [nvarchar](200) NULL,
	[TenureOfPreviousWork] [nvarchar](200) NULL,
	[email_add] [nvarchar](255) NULL,
 CONSTRAINT [pk_customer_financials] PRIMARY KEY CLUSTERED 
(
	[fin_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	PERIOD FOR SYSTEM_TIME ([BeginDate], [EndDate])
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[customer_financials] ADD  DEFAULT (sysutcdatetime()) FOR [BeginDate]
GO

ALTER TABLE [dbo].[customer_financials] ADD  DEFAULT (CONVERT([datetime2],'9999-12-31 23:59:59.9999999')) FOR [EndDate]
GO


USE [pacs_ropali_prod_mar4]
GO

/****** Object:  Table [dbo].[customer_spouse_financials]    Script Date: 17/11/2025 7:18:44 pm ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[customer_spouse_financials](
	[sfin_id] [numeric](8, 0) IDENTITY(1,1) NOT NULL,
	[spouseid] [numeric](12, 0) NOT NULL,
	[customerid] [numeric](12, 0) NOT NULL,
	[job_description] [nvarchar](100) NULL,
	[company_name] [nvarchar](120) NULL,
	[place_work] [nvarchar](125) NULL,
	[ofis_phone] [nvarchar](15) NULL,
	[company_ind] [nvarchar](50) NULL,
	[biz_nature] [numeric](8, 0) NULL,
	[emp_type] [nvarchar](50) NULL,
	[contrak_xpiry] [nvarchar](50) NULL,
	[months_w_comp] [numeric](5, 0) NULL,
	[gross_pay] [float] NULL,
	[pay_freq] [nvarchar](30) NULL,
	[o_benefit] [float] NULL,
	[pmt_mode] [varchar](50) NULL,
	[yrs_biz_optn] [numeric](18, 0) NULL,
	[employi_count] [numeric](6, 0) NULL,
	[flag] [nvarchar](2) NULL,
	[makerid] [numeric](8, 0) NULL,
	[makerdate] [date] NULL,
	[source_type] [numeric](8, 0) NULL,
	[occupation] [numeric](8, 0) NULL,
	[netpay] [float] NULL,
	[house] [nvarchar](150) NULL,
	[strit] [nvarchar](150) NULL,
	[province] [numeric](18, 0) NULL,
	[city] [numeric](18, 0) NULL,
	[barangay] [numeric](18, 0) NULL,
	[sideline] [nvarchar](5) NULL,
	[BeginDate] [datetime2](7) GENERATED ALWAYS AS ROW START NOT NULL,
	[EndDate] [datetime2](7) GENERATED ALWAYS AS ROW END NOT NULL,
	[wProof] [nvarchar](5) NULL,
	[industry] [numeric](18, 0) NULL,
	[mainsector] [numeric](18, 0) NULL,
	[subsector] [numeric](18, 0) NULL,
	[OfficeAddressDistance] [float] NULL,
	[OfficeAddrLat] [float] NULL,
	[OfficeAddrLng] [float] NULL,
	[ResourcePerson] [nvarchar](2000) NULL,
	[landmark] [nvarchar](255) NULL,
	[CompanyFloor] [nvarchar](200) NULL,
	[PersonalPersonel] [nvarchar](200) NULL,
	[WorkDepartment] [nvarchar](200) NULL,
	[TenureOfWork] [nvarchar](200) NULL,
	[WhySixMonthOfWork] [nvarchar](200) NULL,
	[WhySixMonthOfWorkOthers] [nvarchar](200) NULL,
	[TenureOfPreviousWork] [nvarchar](200) NULL,
 CONSTRAINT [pk_customer_spouse_financials] PRIMARY KEY CLUSTERED 
(
	[sfin_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	PERIOD FOR SYSTEM_TIME ([BeginDate], [EndDate])
) ON [PRIMARY]
WITH
(
SYSTEM_VERSIONING = ON (HISTORY_TABLE = [dbo].[customer_spouse_financials_history])
)
GO

ALTER TABLE [dbo].[customer_spouse_financials] ADD  DEFAULT (sysutcdatetime()) FOR [BeginDate]
GO

ALTER TABLE [dbo].[customer_spouse_financials] ADD  DEFAULT (CONVERT([datetime2],'9999-12-31 23:59:59.9999999')) FOR [EndDate]
GO


